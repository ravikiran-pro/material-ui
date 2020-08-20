import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarComponent from './appbar';
import DrawerContents from './drawercontents';

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
    backgroundColor:'#142848',
    top:62,
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
        <AppBarComponent handleDrawerToggle={handleDrawerToggle}/>  
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


export default DrawerComponent;
