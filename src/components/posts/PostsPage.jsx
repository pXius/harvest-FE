import React, { useEffect, useState } from 'react';
import PostsApi from '../../api/PostsApi';
import NewPosts from './NewPosts';

function PostsPage() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const lol = await PostsApi.getAllPosts();
      setResData(lol);
      console.log(lol);
    };
    fetchData();
  }, []);

  return <div></div>;
}

export default PostsPage;
