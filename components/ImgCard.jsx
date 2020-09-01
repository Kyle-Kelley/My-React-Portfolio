import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    padding: "0",
    textAlign: "center",
  },
  imgStyle: {
    display: "block",
    width: "100%",
    height: "auto",
    border: "1px solid #FE6B8B",
    padding: "0",
    margin: "0 auto auto auto",
  },
  cardContent: {
    padding: "0px",
    margin: "0px",
    "&:last-child": {
      paddingBottom: "0",
    },
  },
});

const ImgCard = ({ src, alt }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <img className={classes.imgStyle} src={src} alt={alt} />
      </CardContent>
    </Card>
  );
};

export default ImgCard;
