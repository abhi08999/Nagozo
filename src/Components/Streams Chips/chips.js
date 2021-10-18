import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChipTemplate from "./chip_template";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginRight: "10%",
    marginLeft: "2%",
    display: "flex",

    justifyContent: "start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));
export const Chips = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChipTemplate chipName="Class IX" chipStart="9" chipColor="red"/>
      <ChipTemplate chipName="Class X" chipStart="10" chipColor="pink" />
      <ChipTemplate chipName="Class XI" chipStart="11" chipColor="blue" />
      <ChipTemplate chipName="Class XII" chipStart="12" chipColor="#F0A500" />
      <ChipTemplate chipName="Class 1-8" chipStart="1-8"  chipColor="orange"/>
      <ChipTemplate chipName="IIT JEE" chipStart="I" chipColor="brown" />
      <ChipTemplate chipName="NEET" chipStart="N"  chipColor="#CDF2CA"/>
      <ChipTemplate chipName="ICSE" chipStart="I"  chipColor="#C996CC"/>
      <ChipTemplate chipName="GOVT" chipStart="G" chipColor="#CFB784" />
      <ChipTemplate chipName="ENGG" chipStart="E" chipColor="#A2416B" />
    </div>
  );
};
export default Chips;
