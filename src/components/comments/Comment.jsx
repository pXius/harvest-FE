import React from 'react';


function Comment ({ comment }){
    return(
     <div> 
        <div>
        {comment.authorName}
        </div>
        <div>
            {comment.body}
        </div>
    </div>
    );
}

export default Comment;