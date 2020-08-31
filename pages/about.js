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

      {/* <p>
        I am originally from a small town in Michigan named Niles, and I will
        always freak out with joy when I see something or someone with Michigan
        ties. I've always been super into sports, movies, comedy, and travel
        because those are the things that have always lit my soul on fire.
      </p>
      <p>
        Passion is at the forefront of everything I do and that's what I bring
        above all to each and every team I join.
      </p>
      <p>
        Maybe it's the MidWest in me, but I love to share favorites and relate
        to people through that passion. My favorite movie is and always will be{" "}
        <Link href="https://www.youtube.com/watch?v=n14e2u35rUU">
          Point Break
        </Link>
        . My top three books are{" "}
        <Link href="//www.goodreads.com/book/show/412732.The_Dharma_Bums">
          Dharma Bums
        </Link>
        ,{" "}
        <Link href="//www.goodreads.com/book/show/76334.A_New_Earth">
          A New Earth
        </Link>
        , and{" "}
        <Link href="//www.garthstein.com/works/the-art-of-racing-in-the-rain/">
          The Art of Racing in the Rain
        </Link>
        . My favorite sports are Football, MMA, Chess, Surfing, and Basketball.
        A few more of my favorite things include riding motorcycles, doing yoga,
        walking my dog with my woman, adventuring with friends, and cooking. I
        hope that after you read this we can connect and you'll share your
        favorites with me!
      </p>
      <p>
        My purpose in this life is to share my voice and experiences, and open
        up my ears and heart to hear the voice and experiences of others. I do
        that by combining three things that I truly love: performing stand-up
        comedy, hosting a podcast (
        <Link href="//podcasts.apple.com/us/podcast/the-kyle-kelley-show/id1517902299">
          The Kyle Kelley Show
        </Link>
        ), and web development.
      </p>
      <p>
        I got my start in web development while living in Bali in the fall of
        2019. My girlfriend and I were there so that she could get treatment for
        Lyme Disease. Before living in Bali, I was working as a personal trainer
        and yoga teacher but it quickly became more of a drain than any sense of
        fulfillment, so I did some research and got really excited by the idea
        of writing code and entering the tech industry. I've always really
        enjoyed designing and building things with my hands and using all the
        tools I can, and immediately felt that coding was accessing a more
        evolved and involved portion of that part of my brain.
      </p>
      <p>
        With the guidance of a developer friend, I started doing courses and
        bootcamps for hours a day. Within three months we were back in Los
        Angeles and I had my first coding job working at a FinTech company as a
        super green Junior Dev in charge of QA testing, responsive email
        development, and anything else they had a need for. The company was
        making a switch to React and I worked directly under the Lead React
        Developer, handling documentation, research, communication between
        teams, and the scrum system. Unfortunately, at the onset of the Covid-19
        Pandemic, the company decided to lay off 90% of the company and I was
        let go. Fortunately however, I have spent my quarantine on Udemy
        sharpening my skills.
      </p>
      <p>
        My desire as a developer is to join a company focused on making this
        world a better place. Technology has amazingly beautiful potential and I
        think that we are in a perfect place as a society to build a new system
        that uses that technology for love, growth, and connection. On a more
        specific note, I want to work for a company that cares about the
        environment, its employees, its customers, and its impact on the world.
      </p> */}

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
