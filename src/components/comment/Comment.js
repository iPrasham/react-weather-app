import React from 'react';
import "./Comment.css";

const Comment = function(){
    return <div className="container commentContainer">
            <div className="form-group">
                <textarea className="form-control" rows="3" cols="200" placeholder="Enter your comment here..."></textarea>
            </div>
            <div className="form-group"> 
                <button type="submit" className="commentButton">Comment</button>
            </div>
    </div>
}

export default Comment;