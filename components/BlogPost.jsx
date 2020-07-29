import React, { Component } from 'react';

class BlogPost extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default BlogPost;