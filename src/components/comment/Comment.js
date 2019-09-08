import React, {Fragment, Component} from 'react';

import "./Comment.css";

import "font-awesome/css/font-awesome.min.css";

class Comment extends Component{
    constructor(){
        super();
        this.state = {
            comments: [],
            count: 0
        };
    }

    handleComments = (e) => {
        e.preventDefault();
        let allComments = this.state.comments;
        let comment = e.target.elements.commentBox.value;
        if(comment === "")
        {
            alert("Please enter a comment");
        }
        else
        {
            allComments.push(comment); 
            let commentCount = this.state.comments.length;
            this.setState({
                count: commentCount
            })
            e.target.elements.commentBox.value = "";
        }
    }

    commentFunction(item) {
        return (
            <div className="w-100 allComments">
                <i className="fa fa-user fa-lg"><span className="commentText">{item}</span></i>    
            </div>
        );
    }



    render(){
        return (
            <Fragment>
                <div className="container commentContainer">
                <form  onSubmit = {(e) => this.handleComments(e)}>
                     <div class="row"> 
                        <div className="col">
                            <textarea className="commentBox" id="commentBox" placeholder="Enter your comment here..."></textarea>
                        </div>
                        <div className="w-100">
                            <button type="submit" className="commentButton">Comment</button>    
                        </div>
                        <div className="w-100 comments">
                            <div className="row">
                                <div className="col commentHeading">
                                    <h4><b>Comments ({this.state.count})</b></h4>
                                </div>
                                {this.state.comments.map(this.commentFunction)}
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </Fragment>
        )}
    }

export default Comment;