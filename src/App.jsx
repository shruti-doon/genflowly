import React from 'react';
import { post } from './data.js';
import Post from './components/Post.jsx';
import CommentsList from './components/CommentThread.jsx';
import './App.css'
const App = () => {
  return (
    <div className="app">
      <Post post={post} />
      <CommentsList comments={post.comments} />
    </div>
  );
};

export default App;