import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Calender from './calender';
import Select from './dropdown';
import Text from './text';

const Styles= theme =>({
    root:{
        backgroundColor:'white',
        padding:'12px 18px',
    },
    button:{
        color:'white'
    },
    icon:{
        transform:'scaleX(-1)',
    },
    span:{
        padding:'4px 6px'
    },
    paper:{
        backgroundColor:'white',
        margin:18
    },
    container:{
        paddingBottom:20,
    },
    item:{
        padding:15,
    }
});


class Entry extends Component{
    render(){
        const {classes} = this.props;
        return(
            <>
            <Box className={classes.root} boxShadow={1}>
                <Button variant="contained" style={{ backgroundColor:'#24a1a3'}} className={classes.button} size="small">
                    <ReplayIcon fontSize="small" className={classes.icon}/>
                <span className={classes.span}>Clear Data</span>
                </Button>
            </Box>

            <Institution style={classes} />   
            <Patient style={classes} />
            <Address style={classes} />
            <Cancer style={classes} />
            </>
        );
    }
}
export default withStyles(Styles,{withTheme:true})(Entry);

const Institution =(props)=>{
    const classes = props.style;
    return(
            <Paper className={classes.paper}>
                <Box p={1}>
                    <Typography component="b" variant="h5">
                        Institution Details
                    </Typography>
                </Box>
                <Divider/>
                <Grid container className={classes.container}>
                {
                    [
                        <Select name="Select District"/>,
                        <Select name="Select Instituion"/>,
                        <Select name="Select Department"/>,
                        <Text name="IP/OP/Dept. No"/>
                    ].map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                                {item}
                            </Grid>
                        )
                    }
                    )
                } 
                </Grid>
            </Paper>
    )
}

const Patient = (props) =>{
    const classes= props.style;
    return(
        <Paper className={classes.paper}>
                <Box p={1}>
                    <Typography component="b" variant="h5">
                        Patient Identification
                    </Typography>
                </Box>
                <Divider/>
                <Grid container className={classes.container}>
                {
                    [
                        <Text name="Name"/>,
                        <Text name="Father/Husband/Wife/Name"/>,
                        <Text name="Other Names(s)"/>,
                        <Select name="Aadhaar"/>,
                        <Calender name="Date of Birth"/>,
                        <Text name="Age"/>,
                        <Select name="Select Gender"/>,
                        <Text name="Mobile No"/>,
                        <Text name="Alternative Mobile No"/>
                    ].map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.item}>
                                {item}
                            </Grid>
                        )
                    }
                    )
                }    
                </Grid>
            </Paper>
    )
}

const Address = (props) =>{
    const classes = props.style;
    return(
        <Paper className={classes.paper}>
                <Box p={1}>
                    <Typography component="b" variant="h5">
                        Address Information
                    </Typography>
                </Box>
                <Divider/>
                <Grid container className={classes.container}>
                {[
                        <Select name="India"/>,
                        <Select name="Tamilnadu"/>,
                        <Select name="Select District"/>,
                        <Select name="Select Locality/Village/Town"/>].map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                                {item}
                            </Grid>
                        )})}
                {[
                        <Text name="Taluk"/>,
                        <Text name="Street"/>,
                        <Text name="Landmark"/>,
                        <Text name="Pincode"/>].map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.item}>
                                {item}
                            </Grid>
                        )})}    
                </Grid>
            </Paper>
    )
}

const Cancer = (props) =>{
    const classes =props.style;
    return(
        <Paper className={classes.paper}>
                <Box p={1}>
                    <Typography component="b" variant="h5">
                        Cancer Information
                    </Typography>
                </Box>
                <Divider/>
                <Grid container className={classes.container}>
                {[
                        <Calender name="Date of first diagnosis*"/>,
                        <Calender name="Date of Admission"/>,].map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={3} md={3} lg={3} xl={3} className={classes.item}>
                                {item}
                            </Grid>
                        )})}
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                                <Select name="Select cancer Diagonasis"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                                <Grid container style={{border:'solid 1px black',borderRadius:5}}>
                                     <Grid item style={{backgroundColor:'grey',width:'100%',textAlign:'center',padding:5,borderTopLeftRadius:'inherit',borderTopRightRadius:'inherit',}}>
                                          <b>Primary site</b>
                                     </Grid>  
                                     <Grid container>
                                         <Grid item sm={12} className={classes.item}>
                                             <Select name="Select ICD-O Specification"/>
                                         </Grid>
                                         <Grid item sm={12} className={classes.item}>
                                            <TextareaAutosize aria-label="minimum height" style={{width:'100%',resize:'none'}} rowsMin={7} placeholder="Primary Site Description"/>
                                         </Grid>
                                         <Grid item sm={12} className={classes.item}>
                                             <Text name="Select ICD-O Specification" style={{width:20}}/>
                                         </Grid>
                                     </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                                <Grid container style={{border:'solid 1px black',borderRadius:5}}>
                                     <Grid item style={{backgroundColor:'grey',width:'100%',textAlign:'center',padding:5,borderTopLeftRadius:'inherit',borderTopRightRadius:'inherit',}}>
                                          <b>Primary site</b>
                                     </Grid>  
                                     <Grid container>
                                         <Grid item sm={12} className={classes.item}>
                                             <Select name="Select ICD-O Specification"/>
                                         </Grid>
                                         <Grid item sm={12} className={classes.item}>
                                            <TextareaAutosize aria-label="minimum height" style={{width:'100%',resize:'none'}} rowsMin={7} placeholder="Primary Site Description"/>
                                         </Grid>
                                         <Grid item sm={12} className={classes.item}>
                                             <Text name="Select ICD-O Specification" style={{width:20}}/>
                                         </Grid>
                                     </Grid>
                                </Grid>
                            </Grid>
                </Grid>
            </Paper>
    )
}