import React from "react";

const Comment = props => {
    console.log(props);
    return (
        <div className="comment-text">
            {/* <span className="comment-username"><strong>{comment.username}</strong>{' '}</span> */}
            {/* <span className="comment-text">{comment.text}</span> */}
        </div>
    );
};

export default Comment;