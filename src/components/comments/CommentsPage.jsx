import React, { useEffect, useState } from "react";
import NewCommentForm from "./NewCommentForm";
import CommentCard from "./CommentCard";
import Api from "../../api/Api";

function CommentsPage() {
    const [comments, setComments] = useState([]);
    
    const createComment = (commentData)=>{
        Api.post("/comments", commentData)
            .then((response)=> setComments([...comments,response.data]));
        };    
    
    const getAll = () => {
        Api.get("/comments")
        .then(response => setComments(response.data));
    }

    const deleteComment = (comment) => {
        Api.delete("/comments" + comment.id)
            .then(response => getAll());
    }

    const updateComment = (updatedComment) => {
        Api.get("/comments", updatedComment)
            .then(r => getAll());
    }

    useEffect(()=>{
        getAll();
    },[])

    
    return (
        <div>
            <NewCommentForm onSubmit ={createComment}/>
            {
                comments.map(comment => (<CommentCard
                    comment={comment}
                    onUpdateClick={updateComment}
                    onDeleteClick={deleteComment} />))
            }
        </div>
    )

}

export default CommentsPage;