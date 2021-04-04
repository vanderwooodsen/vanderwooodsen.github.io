import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles({
  list: {
    width: '250',
    height: '100%'
  },
  fullList: {
    backgroundColor: '#171717',
    width: 'auto',
    height: '100%'
  },
  wholePage:{
    backgroundColor: '#171717',
  },
  typography:{
    color: '#bfc0c0'
  },
  button:{
    color: '#fff'
  }
});

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: state,
      })}>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text} className={clsx(classes.typography)}>
            <ListItemIcon className={clsx(classes.typography)}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={clsx(classes.wholePage)}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={clsx(classes.button)}>Menu</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

