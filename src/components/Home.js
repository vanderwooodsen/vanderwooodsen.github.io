import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import {Box} from "@material-ui/core"
import NavBar from './Navbar';

const navStyles = (theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    background: '#181818',
  },

});

class Home extends Component{
  render(){
    const classes = this.props.classes;
    return(
      <div className={classes.root}>
        <Box position="absolute" right="12%">
          <NavBar/>
        </Box>
        Hello world!
      </div>
    )
  }
}

export default withStyles(navStyles, { withTheme: true })(Home);
