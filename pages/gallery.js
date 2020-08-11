import React, { Component } from 'react';
// import ImgCard from '../components/ImgCard';
import ImgContainer from '../components/ImgContainer';

class Gallery extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Pictures of me!</h1>
                <ImgContainer />
            <style jsx global>{`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }
                    h1 {
                        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
                        font-family: 'Permanent Marker', cursive;
                        text-align: center;
                        font-size: 70px;
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