import React from 'react';

import { makeStyles,createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteIcon from '@material-ui/icons/Note';
import ListIcon from '@material-ui/icons/List';

import ProfileIcon from './profile';

import {NavLink} from 'react-router-dom';

const DrawerItem = createMuiTheme({
    palette:{
      primary:{
        main:'#fff',
      },
    },
  })

const styles = makeStyles((theme)=>({
  root:{
    marginTop:20,
  },
  title:{
    display:'flex',
    alignItems:'center',
  },
  gap:{
    padding: 10,
  },
  link:{
    marginLeft:-6,
    color:'white'
  }
}))
  
export default function DrawerContents(){
  const classes = styles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
      return(
      <ThemeProvider theme={DrawerItem}>
        <div className={classes.root}>
        <div className={classes.title}>
            <div className={classes.gap}>
              <ProfileIcon size='48' iconSize='34' backgroundColor='#d3d3d3' iconColor='#fff'/>
            </div>
            <div className={classes.gap}>
              <TypoGraphy component="h2" variant={null} color="primary">TestState</TypoGraphy>
              <TypoGraphy variant="body2" color="primary">StateUser</TypoGraphy>
            </div>
        </div>
        <div>
          <List>
            <ListItem 
              component={NavLink} 
              to="/dashboard" 
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DashboardIcon color="primary"/>
              </ListItemIcon>
              <ListItemText className={classes.link}>Dashboard</ListItemText>
            </ListItem>
            <ListItem 
              component={NavLink} 
              to="/entry" 
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <NoteIcon color="primary"/>
              </ListItemIcon>
              <ListItemText className={classes.link}>New Entry</ListItemText>
            </ListItem>
            <ListItem 
              component={NavLink} 
              to="/task" 
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <ListIcon color="primary"/>
              </ListItemIcon>
              <ListItemText className={classes.link}>Line List</ListItemText>
            </ListItem>
          </List>
        </div>
        </div>
      </ThemeProvider>
      )
  };