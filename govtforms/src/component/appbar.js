import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'
import TypoGraphy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';

import TamilNadu from './../image/tamilnadu.png';
import DPH from './../image/dph.jpg';
import ProfileIcon from './profile';

const useStyle = makeStyles((theme)=>({
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: '100vw',
        },
        backgroundColor:'white',
        color:'black',
        height:62
      },
    root:{
      paddingLeft:10,
      paddingRight:10,
      height:'100%'
    },
    gap:{
      paddingLeft:10,
      opacity:0.7,
    },
    order:{
      [theme.breakpoints.up('md')]: {
        order:3
      },
    }
}))

export default function AppBarComponent(props){
    const classes=useStyle();
    return(
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar disableGutters>
            <Hidden mdUp>
              <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={props.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
              </IconButton>
            </Hidden>         
            <Grid container justify="space-between" alignItems="center" className={classes.root}>
              <Box order={2}>
                  <Grid container>
                    <Grid item>
                        <img src={TamilNadu} alt="TN" width='50' height='50'/>
                    </Grid>
                    <Grid item className={classes.gap}>
                        <TypoGraphy component="p" variant="h6" style={{lineHeight:1.3}}>TNCRP</TypoGraphy>
                        <TypoGraphy  style={{opacity:0.7}}>Version 1.0.0</TypoGraphy>
                    </Grid>
                  </Grid>
              </Box>
              <Box className={classes.order}>
                  <Hidden xsDown>
                    <img src={TamilNadu} alt="TN" width='50' height='50' style={{marginRight:20}}/>
                    <img src={DPH} alt="DPH" width='50'height='50'/>
                  </Hidden>
              </Box>
              <Box order={4}>
                <ProfileIcon size='46' iconSize='34' backgroundColor='#d3d3d3' iconColor='#fff'/>
              </Box>
            </Grid>
        </Toolbar>
      </AppBar>
    )
}
