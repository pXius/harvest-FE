import React, { useState } from "react";


function CommentUpdateForm({ oldComment, onUpdateClick }) {
    const [body, setBody] = useState(oldComment.body);


    return (
        <div>
            
            <textarea
            placeholder="type here"
            value= {body}
            onChange = {event => setBody(event.target.value)}/>
            <button className = "btn btn-info" onClick= {()=> onUpdateClick({...oldComment,body})}>
                Save
    </button>
        </div> 
    )
}

export default CommentUpdateForm;
