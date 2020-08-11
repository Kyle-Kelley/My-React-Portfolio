import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        maxWidth: '30%',
        maxHeight: '30%',
        display: 'inline-flex',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '15px',
        borderRadius: '10px',
        padding: '0',
        justifyItems: 'center'
    },
    imgStyle: {
        display: 'block',
        width: '90%',
        height: 'auto',
        border: '1px solid #FE6B8B',
        borderRadius: '10px',
        padding: '0',
        marginTop: '15px',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardContent: {
        padding: '0px',
        margin: '0px',
    }
});

const ImgCard = ({ src, alt }) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <img className={classes.imgStyle} src={src} alt={alt} />
            </CardContent>
            
        </Card>
    )
}

export default ImgCard;