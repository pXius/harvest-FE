import React from 'react';
import Comment from './Comment';

function CommentsList ({comments}) {
    return ( 
<div>
    Comments List 
    {
        comments.map(comment => <Comment comment= {comment}/>)
    }
</div>
    );

};

export default CommentsList;