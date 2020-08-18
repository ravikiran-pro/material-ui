import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ReplyIcon from '@material-ui/icons/Replay';
import makeStyle, { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

class View extends Component{
    render(){
        return(
            <Entry/>
        )
    }

}
export default View;

const useStyles = makeStyles((theme)=>({
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        marginTop:60,
        backgroundColor:'#ebeff3',
        height:'100vh',  ///let it fluid later
         [theme.breakpoints.down('xs')]: {
            marginTop:56,
          },
        overflow:'hidden',
      },
    top:{
        backgroundColor:'white',
    },
    grid:{
        padding:15,
    },
    head:{
        padding:12,
    },
    subhead:{
        padding:15,
    },
    formControl:{
        width:'100%',
    }
}))

const Entry=()=>{
    const classes=useStyles();
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container className={classes.top}>
                <Grid item xs={12}>
                    <Paper disableElevation elevation={0}>
                        <Button 
                            variant="contained" 
                            color="primary"  
                            size="medium"
                            startIcon={<ReplyIcon/>}
                            style={{margin:15,backgroundColor:'#24a1a3'}}
                        >   
                            CLEAR DATA</Button>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={12}>
                    <Paper disableElevation elevation={1}>
                        <Typography component="h3" variant="b" className={classes.head}>
                        Institution Details
                        </Typography>
                        <Divider/>
                        <Grid item sm={12} className={classes.subhead}>
                            <Grid container spacing={3} style={{paddingTop:10}}>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <FormControl variant="outlined" className={classes.formControl} margin="none">
                                  <InputLabel htmlFor="outlined-age-native-simple">Select District *</InputLabel>
                                  <Select
                                    native
                                    inputProps={{
                                      name: 'Select District',
                                      id: 'outlined-age-native-simple',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                  </Select>
                                </FormControl>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <FormControl variant="outlined" className={classes.formControl} margin="none">
                                  <InputLabel htmlFor="outlined-age-native-simple">Select Institution *</InputLabel>
                                  <Select
                                    native
                                    inputProps={{
                                      name: 'Select District',
                                      id: 'outlined-age-native-simple',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                  </Select>
                                </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} style={{paddingTop:15,paddingBottom:15}}>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <FormControl variant="outlined" className={classes.formControl} margin="none">
                                  <InputLabel htmlFor="outlined-age-native-simple">Select Department *</InputLabel>
                                  <Select
                                    native
                                    inputProps={{
                                      name: 'Select Department',
                                      id: 'outlined-age-native-simple',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                  </Select>
                                </FormControl>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <FormControl variant="outlined" className={classes.formControl} margin="none">
                                  <InputLabel htmlFor="outlined-age-native-simple">IP/OP/Dept. No</InputLabel>
                                  <Select
                                    native
                                    inputProps={{
                                      name: 'Select District',
                                      id: 'outlined-age-native-simple',
                                    }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                  </Select>
                                </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}