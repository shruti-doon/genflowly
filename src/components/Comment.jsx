import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="comment">
      <p>{comment.content}</p>
      {comment.replies.length > 0 && (
        <button onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      )}
      {showReplies &&
        comment.replies.map((reply) => (
          <div key={reply.id} className="reply">
            <p>{reply.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Comment;
