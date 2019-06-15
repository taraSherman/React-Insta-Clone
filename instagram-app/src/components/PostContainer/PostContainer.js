import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './post-container.css';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          likes: props.data.likes
        }
    };

    render() {
    return (
        <div className="post-container">
            <div className="post-container-header">
                <div className="user-thumbnail-container">
                    <img className="user-thumbnail" src={this.props.data.thumbnailUrl} alt=""></img>
                </div>
                <div className="post-container-header-user-name-container">
                    <h2 className="user-name">{this.props.data.username}</h2>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image-container">
                    <img className="post-image" src={this.props.data.imageUrl} alt=""></img>
                </div>
                <div className="post-icon-container">
                    <i className="far fa-heart icon"></i>
                    <i className="far fa-comment icon"></i>
                </div>
                <div className="likes-container">
                    <p className="number-of-likes">{this.props.data.likes} likes</p>
                </div>
            </div>
            <div className="comment-section-container">
                <CommentSection
                    comments={this.props.data.comments}
                 />
            </div>
            <div className="post-timestamp">
                <p timestamp={this.props.data.timestamp} />
            </div>
        </div>
    )}
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timeStamp: PropTypes.string,
        comments: PropTypes.array
    })
};

export default PostContainer;