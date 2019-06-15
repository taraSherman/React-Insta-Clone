import React, { Component } from 'react';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
    };
  }

  render() {
    return (
      <div className="comment">
        <Comment />
      </div>
    );
  }
}

export default CommentSection;