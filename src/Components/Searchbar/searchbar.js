import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    margin:'1% 15% 3% 15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    width: "70%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "60%",
  
  },
}));

const SearchBar=()=> {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'search product' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     </Paper>
  );
}
export default SearchBar;