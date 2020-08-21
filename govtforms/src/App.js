import React,{Component} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import {withStyles} from '@material-ui/core/styles';

import DrawerComponent from './component/drawer';
import Entry from './component/entry';

import {BrowserRouter,Route,Redirect} from 'react-router-dom';


const Styles = theme => ({
    root:{
        height:'100vh',
    },
    toolbar: theme.mixins.toolbar,
    view: {[theme.breakpoints.up('md')]: {
        marginLeft:240,
        width: 'calc(100% - 240px)'
      },
      padding: theme.spacing(0),
      backgroundColor:'#ebeff3',
    },
});

class App extends Component{
    render(){
        const {classes} = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                <BrowserRouter>
                    <DrawerComponent/>
                    <CssBaseline/>
                    <main className={classes.view}>
                         <div className={classes.toolbar} />
                            <Route path='/'>
                                <Redirect
                                    to='/entry'
                                />  
                            </Route>
                            <Route path='/entry' component={Entry}></Route>
                            <Route path='/dashboard' component={Dashboard}></Route>
                            <Route path='/task' component={Task}></Route>
                         
                     </main>
                        </BrowserRouter>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(Styles,{withTheme:true})(App);



function Dashboard(){
    return(
        <h1>Dashboard</h1>
    )
}

function Task(){
    return(
        <h1>Task</h1>
    )
}