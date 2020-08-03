import { Component } from 'react';
import BlogContainer from '../components/BlogContainer';
// import Header from '../components/Header';

class Blog extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
             
                <BlogContainer />
                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            </div>
        )
    }
}
export default Blog;