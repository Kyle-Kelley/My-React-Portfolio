import { Component } from "react";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RadioIcon from '@material-ui/icons/Radio';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';



class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone: '269-240-5794',
            email: 'kylekelley711@gmail.com',
            Github: 'https://github.com/Kyle-Kelley/My-React-Portfolio',
            Instagram: 'https://www.instagram.com/the_kyle_kelley_show/',
            LinkedIn: 'linkedin.com/in/kyle-kelley1992',
            Podcast: 'https://podcasts.apple.com/us/podcast/the-kyle-kelley-show/id1517902299'
        };
    }
    render(){
        const paperStyles = {
            width: '50vw',
            height: '25vh',
            margin: '25px 50px',
            color: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)'
        }
        return(
            <div>
                <Paper elevation={3} style={paperStyles}>
                    <h1>Contact me directly:</h1>
                    <p><Link href='tel:{this.state.phone}'><PhoneIphoneIcon fontSize='large' /></Link></p>
                    <p><Link href='mailto:{this.state.email}'><EmailIcon fontSize='large' /></Link></p>
                </Paper>
                <Paper elevation={3} style={paperStyles}>
                    <h1>View my work:</h1>
                    <p><Link href={this.state.Github}><a><GitHubIcon fontSize='large' /></a></Link></p>
                    <p><Link href={this.state.Instagram}><a><InstagramIcon fontSize='large' /></a></Link></p>
                    <p><Link href={this.state.LinkedIn}><a><LinkedInIcon fontSize='large' /></a></Link></p>
                    <p><Link href={this.state.Podcast}><a><RadioIcon fontSize='large' /></a></Link></p>
                </Paper>
        
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
export default ContactMe;