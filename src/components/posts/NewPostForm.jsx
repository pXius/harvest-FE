import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

function NewPostForm() {
  const [imgUrl, setImgUrl] = useState('');
  const [post, setPost] = useState({
    title: '',
    body: '',
    claimed: false,
    imageUrl: imgUrl
  });

  return (
    <form>
      <ImageUploader etImgUrl={setImgUrl} />
      <div class="form-group">
        <label for="formGroupExampleInput">Donation Title</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Donation Title"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Details about donation:</label>
        <textarea
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Donation Details"
          rows="3"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewPostForm;
