import React, { useEffect, useState } from 'react';
import ReactImageUploadComponent from 'react-images-upload';

function ImageUploader() {
  const [payload, setPayload] = useState(null);

  const updateImage = event => {
    var file = event[0];
    var data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'harvest');
    setPayload(data);
  };

  useEffect(() => {
    const abortFetch = new AbortController();
    const sendImage = async () => {
      try {
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dcbkjgr7c/image/upload',
          {
            method: 'post',
            body: payload,
            signal: abortFetch.signal
          }
        );
        const jsonResponse = await response.json();
        const imageUrl = jsonResponse['secure_url'];
      } catch (error) {
        console.log(error);
      }
    };
    sendImage();
    return () => abortFetch.abort();
  }, [payload]);

  return (
    <div>
      <ReactImageUploadComponent
        singleImage={true}
        onChange={updateImage}
        buttonText="Choose Image"
        className="imgUploader"
      />
    </div>
  );
}

export default ImageUploader;
