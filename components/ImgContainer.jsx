import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgCard from "./ImgCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60vw",
    height: "100%",
    margin: "50px auto",
    background: "#b3dbd3",
    border: "2px solid orange",
    borderRadius: "8px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    padding: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "100%",
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
  ];
  return (
    <>
      <Paper className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {images.map((src, alt) => (
            <GridListTile>
              <ImgCard src={src} key={src} alt={alt} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    </>

    // {/* <Grid
    // container
    // spacing={2}
    // justify="center"
    // alignItems="center"
    // direction="row"
    // >
    // {images.map((src, alt) => (
    //   <Grid item>
    //     <GridList>
    //       <ImgCard src={src} key={src} alt={alt} />
    //     </GridList>
    //   </Grid>
    // ))}
    // </Grid> */}

    // <>
    //   <MyPaper>
    //     <Grid container spacing={2} justify="center" alignItems="center">
    //       <Grid item xs={4}>
    //         <ImgCard src="bali-cafe.JPG" alt="me at a Bali cafe" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard src="beach.JPG" alt="pic on the beach" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard src="cycling-trip.JPG" alt="end of cycling trip" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard
    //           src="family-road-trip.jpg"
    //           alt="me, brynn, and frank in the car"
    //         />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard src="headshot.png" alt="my headshot" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard src="paintball.jpg" alt="playing paintball" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard src="pball-gun.jpg" alt="with paintball gun" />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ImgCard
    //           src="spartan-boys.JPG"
    //           alt="me and the guys after a race"
    //         />
    //       </Grid>
    //     </Grid>
    //   </MyPaper>
    // </>

    // <MyContainer>
    //     <ImgCard src='bali-cafe.JPG' alt='me at a Bali cafe' />
    //     <ImgCard src='beach.JPG' alt='pic on the beach' />
    //     <ImgCard src='cycling-trip.JPG' alt='end of cycling trip' />
    //     <ImgCard src='family-road-trip.jpg' alt='me, brynn, and frank in the car' />
    //     <ImgCard src='headshot.png' alt='my headshot' />
    //     <ImgCard src='paintball.jpg' alt='playing paintball' />
    //     <ImgCard src='pball-gun.jpg' alt='with paintball gun' />
    //     <ImgCard src='spartan-boys.JPG' alt='me and the guys after a race' />
    // </MyContainer>
  );
};

export default ImgContainer;
