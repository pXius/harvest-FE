import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="card">
      <div className="card-header">{post.claimed ? 'Claimed' : 'Available'}</div>
      <img className="card-img-top" src={post.imageUrl} alt="" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <div className="bottom-of-card">
          <Link to={`/posts/${post.id}`} className="btn btn-primary">
            View Harvest
          </Link>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
