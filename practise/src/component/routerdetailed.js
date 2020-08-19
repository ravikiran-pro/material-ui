import React, { Component } from 'react';
import {BrowserRouter,Route,Router,Link, Switch} from 'react-router-dom';

class DrawerRoutingComponent extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <li style={{display:'inline-grid',lineHeight:2}}>
            <Link to="/users">users</Link>
            <Link to="/">Home</Link>
          </li>

          <Switch>
            <Route path="/users">
              <User/>    
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

function User(){
  return(
    <>
    <div/>
        <BrowserRouter>
          <li style={{display:'inline-grid',lineHeight:2}}>
            <Link to="/users/further">further</Link>
          </li>

          <Switch>
            <Route path="/users/further">
              <Further/>    
            </Route>
          </Switch>
        </BrowserRouter>
      </>
  )
}

function Further(){
  return(
    <h1>oops</h1>
  )
}

export default DrawerRoutingComponent;