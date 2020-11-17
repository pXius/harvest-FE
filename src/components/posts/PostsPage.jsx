import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsApi from '../../api/PostsApi';
import PostCard from './PostCard';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await PostsApi.getAllPosts();
      setPosts(response.data);
      console.log(posts);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postList = posts.map(post => <PostCard key={post.id} post={post} />);

  return posts === [] ? 'Loading....' : postList;
}

export default PostsPage;
