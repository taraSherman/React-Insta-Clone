import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';


const Comment = props => {
    return (
      <div>
        <span>{props.comment.username}</span> {props.comment.text}
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