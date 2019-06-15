import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';


const Comment = props => {
    return (
      <div>
        <span><strong>{props.comment.username}</strong></span> {props.comment.text}
      </div>
    );
  };

Comment.propTypes ={
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
};

export default Comment;