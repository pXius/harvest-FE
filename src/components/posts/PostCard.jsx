import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid4">
                        <div className="product-image4">
                            <a href="#">
                                <img className="pic-1"
                                     src={post.imageUrl} />
                                    <img className="pic-2"
                                         src={post.imageUrl} />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="#">{post.title}</a></h3>
                            <div className="info">
                                <span>{post.date}</span><br/>
                                <span>{post.body}</span>
                            </div>
                            <Link  className="claim"
                                to={{ pathname: `/posts/${post.id}`, state: { post } }}>
                                View Harvest
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;

