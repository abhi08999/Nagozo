import React from "react";
import { Paper, Divider} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    marginLeft:"20px"
  },
  
}));

const TitleTemplate = ({ title }) => {
  const classes = useStyles();

  return (
    <>
      <Paper
        elevation={0}
        style={{
          padding: "5px",
          background: "transparent",
          color: "black",
        }}
      >
            <h2 className={classes.title}>{title}</h2>
        </Paper>
      {/* <Divider /> */}
    </>
  );
};

export default TitleTemplate;
