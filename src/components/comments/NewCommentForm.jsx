import React, { useEffect, useState } from 'react';


export default function NewCommentForm({onSubmit}){
    const[authorName, setAuthorName] = useState("")
    const [body, setBody] = useState("");

     

    return (
        <div>
            <label> New Comment </label>
            <textarea
            placeholder="type here"
            value= {body}
            onChange = {event => setBody(event.target.value)}/>

        <label> User </label>
            <textarea
            placeholder="type here"
            value= {authorName}
            onChange = {event => setAuthorName(event.target.value)}/>

            <button onClick= {()=> onSubmit({body, authorName})}>
                Comment
    </button>
        </div> 
    )
}

