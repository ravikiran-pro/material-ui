import React from 'react';
//import Layout from './component/layout'  {/* Layout of App to be submitted */}

/*unused components throughing error on build*/
    ///import ContainerExample from './component/container';
    ///import CustomStyles from './component/customstyles';
    ///import GridComponent from './component/grid';
    ///import ButtonTypes from './component/button';
    ///import HandlerExample from './classcomponent/handler'
    ///import StyleExample from './component/stylescombined';
    ///import AppBarComponent from './classcomponent/appbar';
    ///import ThemeChanger from './classcomponent/sampletheme';
    ///import HandleComponent from './classcomponent/hidden';
    ///import DrawerComponent from './component/drawer';    
import RouterComponent from './component/router';
import DrawerRoutingComponent from './component/routerdetailed';
const Router=DrawerRoutingComponent;


export default class App extends React.Component{
  render(){
    return (
     <Router/>
    );
  }
}

