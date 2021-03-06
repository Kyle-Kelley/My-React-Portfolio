import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

const MyPaper = styled(Paper)({
  width: "fit-content",
  padding: "1rem",
  height: "100%",
  margin: "50px auto",
  background: "#b3dbd3",
  border: "2px solid #FE6B8B",
  borderRadius: "8px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  textAlign: "center",
});

const Projects = () => {
  return (
    <div>
      <h1>projects!</h1>
      <MyPaper elevation={3}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2">
              <Link href="/todo-app">TodoApp</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2">
              <Link href="https://brynn-kerin.net/">
                Website w/Headless CMS (in progress)
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2">
              <Link href="https://show-store.mybigcommerce.com/?ctk=362e0644-4a96-4504-8951-30725125b6b0">
                Sample eCommerce Site =>
              </Link>
              <span>(preview code: mimcjmt8jw)</span>
            </Typography>
          </Grid>
        </Grid>
      </MyPaper>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
          font-family: "Permanent Marker", cursive;
        }
        h1 {
          font-size: 3rem;
          text-align: center;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Projects;
