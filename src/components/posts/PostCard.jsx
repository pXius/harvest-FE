import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {

    return (
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid4">
                        <div className="product-image4">
                            <a href="#">
                                <img className={post.claimed ? 'claimed pic-1' : 'pic-1'}
                                     src={post.imageUrl} />
                                    <img className={post.claimed ? 'claimed pic-2' : 'pic-2'}
                                         src={post.imageUrl} />
                            </a>
                            {post.claimed ? (
                                <span class="product-new-label">Claimed</span>
                            ) : <span class="product-new-label">Available</span>}
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="#">{post.title}</a></h3>
                            <div className="info">
                                <span>{post.date}</span><br/>
                                <span className="span-body">{post.body}</span>
                            </div>
                            <Link  className="claim"
                                to={{ pathname: `/posts/${post.id}`, state: { post } }}>
                                View Harvest
                            </Link>
                        </div>
                    </div>
                </div>
    );

}

export default PostCard;
