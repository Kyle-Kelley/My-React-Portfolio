import { Component } from "react";
// import Header from '../components/Header';

class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone: '269-240-5794',
            email: 'kylekelley711@gmail.com',
        };
    }
    render(){
        return(
            <div>
                <h1>Contact me directly:</h1>
                <p>{this.state.phone}</p>
                <p>{this.state.email}</p>
        
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            </div>
        )
    }
}
export default ContactMe;