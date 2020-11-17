import React, { useEffect, useState } from 'react';
import PostsApi from '../../api/PostsApi';
import NewPostForm from './NewPostForm';

function NewPosts() {
  const [post, setPost] = useState({});

  useEffect(() => {
    const createPost = async () => {
      try {
        const response = await PostsApi.createPost(post);
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    createPost();
  }, [post]);

  return (
    <div>
      <NewPostForm setPost={setPost} />
    </div>
  );
}

export default NewPosts;
