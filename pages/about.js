import React from "react";
// import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
// import { styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "60vw",
    height: "100%",
    margin: "50px auto",
    background: "#b3dbd3",
    border: "2px solid orange",
    borderRadius: "8px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    padding: "15px",
  },
  card: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    margin: "10px",
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const aboutMe = [
    "Born in Niles, MI",
    "I have successfully ridden a bicycle from Manhattan to San Francisco by myself",
    "Favorite books: Dharma Bums, A New Earth, The Art of Racing in the Rain",
    "Favorite Movies: Point Break, Butch Cassidy and The Sundance Kid, and Life Itself",
    "Favorite Sports: Football, MMA, Basketball",
    "Hobbies: reading, riding motorcycles, surfing, playing chess, working out, cooking, and traveling",
    "My podcast (The Kyle Kelley Show) can be found on iTunes and Spotify",
  ];
  const workEXP = [
    "I learned web development while living in Bali",
    "I got a job within three months as a Junior Dev",
    "With the guidance of a developer friend, I started doing courses and bootcamps for hours a day. Within three months we were back in Los Angeles and I had my first coding job working at a FinTech company as a super green Junior Dev in charge of QA testing, responsive email development, and anything else they had a need for. The company was making a switch to React and I worked directly under the Lead React Developer, handling documentation, research, communication between teams, and the scrum system. Unfortunately, at the onset of the Covid-19 Pandemic, the company decided to lay off 90% of the company and I was let go. Fortunately however, I have spent my quarantine on Udemy sharpening my skills.",
    "My desire as a developer is to join a company focused on making the world a better place. Technology has amazingly beautiful potential and I think that we are in a perfect place as a society to build a new system that uses that technology for love, growth, and connection. On a more specific note, I want to work for a company that cares about the environment, its employees, its customers, and its impact on the world.",
  ];

  return (
    <div>
      <h1>About me:</h1>
      <Paper className={classes.paper}>
        <Grid
          container
          className={classes.root}
          spacing={2}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            {aboutMe.map((i) => (
              <Card className={classes.card}>
                <CardContent>
                  <Typography>{i}</Typography>
                </CardContent>
                <Divider />
              </Card>
            ))}
          </Grid>
        </Grid>
      </Paper>
      <h1>Work Experience:</h1>
      <Paper className={classes.paper}>
        <Grid
          container
          className={classes.root}
          spacing={2}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            {workEXP.map((i) => (
              <Card className={classes.card}>
                <CardContent>
                  <Typography>{i}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Paper>

      <style jsx global>{`
        html,
        body {
          @import url("https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap");
          padding: 0;
          margin: 0;
          font-family: "Lexend Zetta", sans-serif;
          letter-spacing: 0.05px;
        }
        h1 {
          @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
          font-family: "Permanent Marker", cursive;
          text-align: center;
          font-size: 70px;
        }
        p {
          font-size: 30px;
          margin: 20px 50px;
          text-align: center;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
