import React from 'react';
import './Posts.css';
import  Avatar from "@mui/material/Avatar";


function Posts({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div className="post_header">
      <Avatar
           className="post_avatar"
           alt="Brady654"
           src={imageUrl}
           />
      <h3 className="username"><strong>{username}</strong></h3>
      </div>
         <img 
         className="post_image"
         src={imageUrl}
         alt= "Pawfect Companion"
         />
         
         <h4 className="post_text" ><strong>{username}</strong>{caption}</h4>
    </div>
  )
}

export default Posts