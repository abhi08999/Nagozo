import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"90%",
    height:"100%",
    borderRadius:"20px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
}));

const CardTemplate=({imgUrl})=> {
  const classes = useStyles();


  return (
    <Card className={classes.root} style={{marginLeft:"20px"}}>
      
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title="Paella dish"
      />
      </Card>
  );
}
export default CardTemplate;