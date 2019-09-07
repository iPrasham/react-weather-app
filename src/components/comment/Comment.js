import React, {Fragment} from 'react';

import "./Comment.css";

import "font-awesome/css/font-awesome.min.css";

const Comment = function(){
    return (
        <Fragment>
            <div className="container commentContainer">
                 <div class="row"> 
                    <div className="col">
                        <textarea className="commentBox" placeholder="Enter your comment here..."></textarea>
                    </div>
                    <div className="w-100">
                        <button type="button" className="commentButton">Comment</button>    
                    </div>
                    <div className="w-100 comments">
                        <div className="row">
                            <div className="col commentHeading">
                                <h4><b>Comments (1)</b></h4>
                            </div>
                            <div className="w-100 allComments">
                                <i className="fa fa-user fa-lg"><span className="commentText">The weather is quite nice.</span></i>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )}

export default Comment;