import React, { Component } from 'react'

class Gallery extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Pictures of me!</h1>
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

export default Gallery;