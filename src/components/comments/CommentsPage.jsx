import React, { useEffect, useState } from "react";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import Api from "../../api/Api";

function CommentsPage() {
    const [comments, setComments] = useState([]);
    useEffect (()=> {
        Api.get("/comments")
        .then((r)=> setComments(r.data))
    }, [])
    const createComment = (commentData)=>{
        Api.post("/comments", commentData)
            .then((response)=> window.location.reload());
        };    
    return (
        <div>
            <NewCommentForm onSubmit ={createComment}/>
            <CommentsList comments = {comments}/>
        </div>
    )

}

export default CommentsPage;