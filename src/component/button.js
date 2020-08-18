import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default class ButtonType extends Component{
    render(){
        return(
            <Grid container justify="center" alignItems='center'>
                <Grid item xs={12}>
                    <ButtonNormal/>
                </Grid>
                <ButtonTypes/>
                <ButtonSizes/>
                <ButtonIcon/>
            </Grid>

        )
    }
}
 
const ButtonIcon =()=>{
    return(
        <Grid item xs={6} justify="center" alignItem="center" direction="row">
            <IconButton aria-label="delete" color="secondary">
              <ArrowDownwardIcon font-size="large" />
            </IconButton>
        </Grid>
    )
}

const styles= makeStyles((theme)=>({
    button:{
        margin:20,
    },
    grid:{
        flexGrow:1,
        backgroundColor:'orange'
    }
}))

const ButtonSizes =()=>{
    const classes=styles();
    return(
        <Grid item xs={6} justify="center" alignItem="center" direction="row">
            <Button size="size" variant="contained" color="primary" className={classes.button}>small</Button>
            <Button size="medium" variant="contained" color="primary" className={classes.button}>medium</Button>
            <Button size="large" variant="contained" color="primary" className={classes.button}>large</Button>
        </Grid>
    )
}

const ButtonTypes =()=>{
    const classes=styles();
    return(
        <Grid item xs={6} justify="center" alignItem="center" direction="row">
            <Button variant="contained" color="primary" className={classes.button}>Contained</Button>
            <Button variant="text" color="primary" className={classes.button}>Text</Button>
            <Button variant="outlined" color="primary" className={classes.button}>Outlined</Button>
        </Grid>
    )
}

const ButtonNormal=()=>{

    const classes=styles();
    function buttoncolors(){
    const arr=['default','primary','secondary'];
    const ret=[]
    for(var i=0;i<arr.length;i++){
            ret.push(
                <Button variant="contained" color={arr[i]} className={classes.button}>
                     {arr[i]}
                </Button>
            );
    }
    return ret;
    }
    return(
        <>
            {buttoncolors()}
            <Button variant="contained" disabled className={classes.button}>disabled</Button>
            <Button variant="contained" color="primary" href="https://www.google.com" className={classes.button}>link</Button>
            <Button variant="contained" disableElevation color="primary" href="https://www.google.com" className={classes.button}>Disable Elevation</Button>
        </>
    )
  }
