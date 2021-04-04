import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const navStyles = (theme) => ({
  footer: {
    display: 'flex',
    padding: theme.spacing(2, 1),
    background: '#3f4045',

  },
  copyright:{
    color:'#70727c',
    justifyContent:'center'
  }
});

class Footer extends Component {
  render() {
    const classes = this.props.classes;

    return(
      <footer className={classes.footer}>
        <Box position='sticky'>
          <Typography variant="body1"  className={classes.copyright}>
          Copyright © 2021 Christis_Portfolio Inc. United States
          </Typography>
        </Box>
      </footer>
    )
  }
}

export default withStyles(navStyles, { withTheme: true })(Footer);
