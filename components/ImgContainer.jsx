import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgCard from "./ImgCard";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    height: "100%",
    margin: "50px auto",
    background: "#b3dbd3",
    border: "2px solid #FE6B8B",
    borderRadius: "8px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    padding: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageGrid: {
    textAlign: "-webkit-center",
  },
}));

const ImgContainer = () => {
  const classes = useStyles();
  const images = [
    "bali-cafe.JPG",
    "beach.JPG",
    "cycling-trip.JPG",
    "family-road-trip.jpg",
    "headshot.png",
    "paintball.jpg",
    "pball-gun.jpg",
    "spartan-boys.JPG",
    "IMG_0007.JPG",
    "IMG_0111.JPG",
    "IMG_0157.JPG",
    "IMG_0162.JPG",
    "IMG_1231.JPG",
    "IMG_1595.JPG",
    "IMG_1902.JPG",
    "IMG_2530.JPG",
    "IMG_3117.JPG",
    "IMG_3223.JPG",
    "IMG_3253.JPG",
    "IMG_3372.JPG",
    "IMG_4020.JPG",
    "IMG_4341.JPG",
    "IMG_4509.JPG",
    "IMG_6944.JPG",
    "IMG_6995.JPG",
    "IMG_7324.JPG",
    "IMG_7568.JPG",
    "IMG_7586.JPG",
    "IMG_8543.JPG",
    "IMG_8553.JPG",
  ];
  return (
    <>
      <Paper className={classes.root}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          direction="row"
          className={classes.imageGrid}
        >
          {images.map((src, alt) => (
            <Grid item>
              <ImgCard src={src} key={src} alt={alt} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default ImgContainer;
