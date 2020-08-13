import { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RadioIcon from '@material-ui/icons/Radio';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';



const MyPaper = styled(Paper)`
${({ theme }) => `
        width: '30vw',
        height: '100%',
        margin: '50px auto',
        padding: '25px',
        background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)',
        borderRadius: '8px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textAlign: 'center',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center'

        ${theme.breakpoints.down('sm')} {
            padding: 15px;
        }
`}
`;

// styled(Paper)({
//         width: '30vw',
//         height: '100%',
//         margin: '50px auto',
//         padding: '25px',
//         background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)',
//         borderRadius: '8px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         textAlign: 'center',
//         display: 'block',
//         justifyContent: 'center',
//         alignItems: 'center'
// });
// padding must disappear on mobile
const MyLink = styled(Link)({
    padding: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
});

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
        return(
            <div>
                <MyPaper elevation={3}>
                    <h1>Contact me directly:</h1>
                    <Typography>
                        <MyLink href='tel:2692405794' color='primary' ><PhoneIphoneIcon fontSize='large' /></MyLink>
                        <MyLink href='mailto:kylekelley711@gmail.com' color='primary' ><EmailIcon fontSize='large' /></MyLink>
                    </Typography>
                    
                </MyPaper>
                <MyPaper elevation={3}>
                    <h1>View my work:</h1>
                    <Typography>
                        <MyLink href={this.state.Github} color='primary' ><GitHubIcon fontSize='large' /></MyLink>
                        <MyLink href={this.state.Instagram} color='primary' ><InstagramIcon fontSize='large' /></MyLink>
                        <MyLink href={this.state.LinkedIn} color='primary' ><LinkedInIcon fontSize='large' /></MyLink>
                        <MyLink href={this.state.Podcast} color='primary' ><RadioIcon fontSize='large' /></MyLink>
                    </Typography>
                    
                </MyPaper>
        
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
            text-align: center;
        }
        @media (max-width: 600px) {
            h1{
                font-size: 1.2rem;
            }
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