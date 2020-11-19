import React, { useEffect, useState } from 'react';
import CommentApi from "..//../api/CommentApi";

export default function CommentCard({commentData}){
    const{
        id,
        body,
        authorName,
        post
    } = commentData;

    const
}