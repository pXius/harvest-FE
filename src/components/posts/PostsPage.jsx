import React, { useEffect, useState } from 'react';
import PostsApi from '../../api/PostsApi';
import ImageUploader from './ImageUploader';
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

  return (
    <div>
      <NewPosts />
    </div>
  );
}

export default PostsPage;
