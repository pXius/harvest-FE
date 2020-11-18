import React, { useEffect, useState } from 'react';
import PostsApi from '../../api/PostsApi';
import PostCard from './PostCard';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await PostsApi.getAllPosts();
      setPosts(response.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postList = posts.map(post => <PostCard key={post.id} post={post} />);

  return posts === [] ? 'Loading....' : postList;
}

export default PostsPage;