import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };

        render() {
            return (
                <div>
                    comment section
                </div>
            )
        }
    }
} 

export default CommentSection;