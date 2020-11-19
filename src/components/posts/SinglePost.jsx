import React, { useState } from 'react';
import { atob } from 'js-base64';
import { useHistory, useLocation } from 'react-router-dom';
import ErrorScreen from '../tempscreens/ErrorScreen';
import PostsApi from '../../api/PostsApi';
import ChatApi from '../../api/ChatApi';

function SinglePost() {
  const tokenKey = window.sessionStorage.getItem('_token');
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.post;
  const [post, setPost] = useState(passedPost);
  const history = useHistory();

  const handleClaim = () => {
    const setClaimed = async () => {
      try {
        const response = await PostsApi.updatePost({ ...post, claimed: !post.claimed });
        setPost(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    setClaimed();
  };

  const messageHandler = () => {
    const createOrDirect = async () => {
      try {
        const response = await ChatApi.createThread(post.email, {});
        console.log(response);
        history.push(`/chat/${response.data.id}`);
      } catch (e) {
        console.log(e);
      }
    };
    createOrDirect();
  };
  try {
    const isPoster = atob(tokenKey).includes(post.email);
    return (
      /*      <div className="card single-card">
        <div className="card-header">{post.claimed ? 'Claimed' : 'Available'}</div>
        <img className="card-img-top" src={post.imageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p>{post.date}</p>
          <p className="card-text">{post.body}</p>

          <div className="bottom-of-card">
            {isPoster ? (
              <button onClick={handleClaim} type="button" className="btn btn-warning">
                {post.claimed ? 'Set Available' : 'Set Claimed'}
              </button>
            ) : null}
            {isPoster ? null : (
              <button type="button" onClick={messageHandler} className="btn btn-primary">
                Message Poster
              </button>
            )}
          </div>
        </div>
      </div> */

      <div className="col-md-3 col-sm-6">
        <div className="product-grid4">
          <div className="product-image4">
            <a href="#">
              <img
                className={post.claimed ? 'claimed pic-1' : 'pic-1'}
                src={post.imageUrl}
              />
              <img
                className={post.claimed ? 'claimed pic-2' : 'pic-2'}
                src={post.imageUrl}
              />
            </a>
          </div>
          <div className="product-content">
            <h3 className="title">
              <a href="#">{post.title}</a>
            </h3>
            <div className="info">
              <span>{post.date}</span>
              <br />
              <span>{post.body}</span>
            </div>
            <div className="bottom-of-card">
              {isPoster ? (
                <button onClick={handleClaim} type="button" className="btn btn-warning">
                  {post.claimed ? 'Set Available' : 'Set Claimed'}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SinglePost;
