import React, {useState} from 'react';
import CommentUpdateForm from "./CommentUpdateForm";

function CommentCard({comment, onDeleteClick, onUpdateClick}) {
    const [isUpdating, setIsUpdating] = useState (false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    return isUpdating ?
    <CommentUpdateForm oldComment={comment} onUpdateClick={updateComment=> {setIsUpdating(false);onUpdateClick={updateComment};}}/> : 
    <div>
        <h5>{comment.authorName}</h5>
        <h4>{comment.body}</h4>

         <div>
                    <button  className = "btn btn-info" onClick={() => onDeleteClick(comment.id)}>
                        Delete
                </button>

                    <button  className = "btn btn-info" onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>

    </div>
}

export default CommentCard;