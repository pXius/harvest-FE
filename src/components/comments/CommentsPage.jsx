import React, { useEffect, useState } from "react";
import CommentApi from '..//../api/CommentApi';
import CommentCard from './CommentCard';
import NewCommentForm from './NewCommentForm';



function CommentsPage() {
    const[comments, setComments] = useState([]);

    const createComment = async (body) => {
        CommentApi.createComment(body).then(response=> setComments([...comments, response.data]));
    };

    useEffect( async ()=> {
        const 
    })
}