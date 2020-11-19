import React, { useState } from "react";


function CommentUpdateForm({ oldComment, onUpdateClick }) {
    const [body, setBody] = useState(oldComment.body);
    
    return (
        <div >
            <div >
                <h1>Update product</h1>

                <div >
                    <textarea  placeholder="Comment" value={body} onChange={e => setBody(e.target.value)} />
                </div>

                <button  onClick={() => onUpdateClick({ ...oldComment, body})}>
                    Update
                </button>
            </div>
        </div>
    );
}

export default CommentUpdateForm;
