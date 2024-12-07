import React from 'react';
import Comment from './Comment';

const CommentThread = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentThread;