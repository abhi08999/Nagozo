import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import React from "react";
const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: "#A2D2FF",
    color: "#ffffff",
    fontWeight: "bold",
    flex: "1",
  },
  avatar: {
    color: "red",
  },
}));

const ChipTemplate = ({ chipStart, chipName, chipColor }) => {
  const classes = useStyles();

  return (
    <Chip
      style={{ backgroundColor: chipColor }}
      label={chipName}
      className={classes.chip}
    />
  );
};

export default ChipTemplate;
