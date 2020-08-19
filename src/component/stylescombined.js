import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {makeStyles,withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

const Style = {
    root:{
        fontSize:22,
        color:'lightgreen',
        backgroundColor:'orange',
    },
    gap:{
        padding:30
    }
}

class StyleExample extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <>
                <div className={classes.gap}>
                    <p className={clsx(classes.root,classes.gap)}>I am from Class Component</p>
                </div>
                <div className={classes.gap}>
                    <StyleExampleFunction/>
                </div>
            </>
        )
    }
}
export default withStyles(Style)(StyleExample);

const StyleExampleFunction=()=>{
    const classes = makeStyles((theme)=>(Style))();
    return(
        <p className={clsx(classes.root,classes.gap)}>I am from Functional Component</p>
    )

}

