import React, { useEffect, useState } from 'react';
import PostsApi from '../../api/PostsApi';
import ImageUploader from './ImageUploader';

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
      <ImageUploader />
    </div>
  );
}

export default PostsPage;
