import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                <div className="comment">
                    <textarea type={"text"} className={"box"} placeholder={"Write a comment"}></textarea>
                    <button
                        className="button"
                        type="submit"
                    >
                        Add Comment
                    </button>
                </div>
            </div>
        );
    }
}

export default Comment;