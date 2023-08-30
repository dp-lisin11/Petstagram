
import React, {useState, useEffect} from 'react';
import './App.css';
import logoL from './LogoLight-s.jpg';
import Post from './Posts.js'
import {db} from './firebase';

function App() {
 const[posts,setPosts] = useState([]);
useEffect(()=> {
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
},[posts])
  
  return (
    <div className="app">    
      <div className="app_header">
      <img 
      className="app_headerImage"
      src={logoL}
      alt="This is the logo"
      />    
      </div>
      
      {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
        ))
      }
    </div>
   
  );
}

export default function MyApp() {
  return (
    <div>    
      <App />
    </div>
  );
}
