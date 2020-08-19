import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const drawerWidth = 240;
const Theme = createMuiTheme({
    breakpoints: {
        values: {
          sm: 960,
        },
      },
  });

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function DrawerComponent(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (

    <>
      <CssBaseline />
        {/* replace with appbar or wherever you feel */}
        <Controller handleDrawerToggle={handleDrawerToggle}/>  
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links.
            Drawer Tablet changed --- available only below tablet
         */}
        <ThemeProvider theme={Theme}>
            <Hidden xsUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                        <DrawerContents/>
                </Drawer>
            </Hidden>
            {/* Drawer Desktop version --available till desktop */}
            <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                        <DrawerContents/>
                </Drawer>
            </Hidden>
        </ThemeProvider>
      </nav>
    </>
  );
}

const DrawerContents =()=> {
    return(
    <div>
        <a href="#" style={{margin:'10%'}}>link</a>
    </div>
    )
};

function Controller (props){
  const classes = useStyles();
  return(
    <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
    </>
  )
}

export default DrawerComponent;
