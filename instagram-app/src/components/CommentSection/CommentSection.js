import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './comment-section.css';


class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: props.comments,
            text: ''
        };
    }

    changeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    addNewComment = (e) => {
      e.preventDefault();
      this.setState(prevState => {
          return {
              comments: [...prevState.comments,
              {
                 text: prevState.text,
                 username: localStorage.getItem('username')
              }],
              text: ''
          }
      })
    }

    render() {
      return (
        <div>
          {this.state.comments.map(comment => {
            return <Comment comment={comment} key={comment.text} />;
          })}
          <form onSubmit={this.addNewComment}>
            <input 
              className="comment-input" 
              placeholder="Add Comment..."
              value={this.state.text}
              onChange={this.changeHandler}
            />
          </form>
        </div>
      )
    }
}

Comment.propTypes ={
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
};

export default CommentSection;