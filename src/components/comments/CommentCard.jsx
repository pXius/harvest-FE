import React, {useState} from 'react';
import CommentUpdateForm from "./CommentUpdateForm";

function CommentCard({comment, onDeleteClick, onUpdateClick}) {
    const [isUpdating, setIsUpdating] = useState (false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    return isUpdating ?
    <CommentUpdateForm oldComment ={comment} onUpdateClick = {(updatedComment) => { setIsUpdating(false); onUpdateClick(updatedComment); }} />
    :
    <div>
        <h5>{comment.authorName}</h5>
        <h4>{comment.body}</h4>

         <div>
                    <button  onClick={() => onDeleteClick(comment)}>
                        Delete
                </button>

                    <button  onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>

    </div>
}

export default CommentCard;