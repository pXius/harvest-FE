import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ErrorScreen from '../tempscreens/ErrorScreen';
import PostsApi from '../../api/PostsApi';
import ChatApi from '../../api/ChatApi';

function SinglePost() {
  const userEmail = window.sessionStorage.getItem('userEmail');
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.post;
  const [post, setPost] = useState(passedPost);
  const history = useHistory();
  const isPoster = userEmail === post.email;

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
        const thread = response.data;
        history.push({ pathname: `/chat/${thread.id}`, state: { thread } });
      } catch (e) {
        console.log(e);
      }
    };
    createOrDirect();
  };
  try {
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

/*       <div className="col-md-3 col-sm-6">
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
              {isPoster ? null : (
                <button
                  type="button"
                  onClick={messageHandler}
                  className="btn btn-primary">
                  Message Poster
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      </div> */

      <div className="singlePost-card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={post.imageUrl} alt="Single post img" /></div>
						</div>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{post.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star unchecked"></span>
								<span className="fa fa-star unchecked"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">{post.body}</p>
						<div className="action">
							
              {isPoster ? (
                <button className="singlePost-btn btn btn-default" onClick={handleClaim} type="button">
                {post.claimed ? 'Set Available' : 'Set Claimed'}</button>
              ) : null}

              {isPoster ? null : (
                <button className="singlePost-btn btn btn-default" onClick={messageHandler} type="button">
                  Message Poster</button>
              )}

              <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>

						</div>
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
