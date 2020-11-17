import { format } from 'date-fns';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

function NewPostForm({ setPost }) {
  const [imgUrl, setImgUrl] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [details, setDetails] = useState('');
  const [postAs, setPostAs] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    setPost({
      title: postTitle,
      body: details,
      claimed: false,
      imageUrl: imgUrl,
      date: format(new Date(), 'dd-MMM-yyyy'),
      poster: postAs
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <ImageUploader setImgUrl={setImgUrl} />
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Post as</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Post as..."
          onChange={e => setPostAs(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Donation Title</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput1"
          placeholder="What are you donating?"
          onChange={e => setPostTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Details about donation:</label>
        <textarea
          type="text"
          className="form-control"
          id="formGroupExampleInput3"
          placeholder="Details about the donation?...  expiry date, quantity, or anything else you would like to share."
          rows="3"
          onChange={e => setDetails(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewPostForm;
