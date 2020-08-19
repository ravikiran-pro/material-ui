import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyle = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        backgroundColor:'orange',
    },
    root_complex:{
        flexGrow:1,
        backgroundColor:'#f5f4f2    ',
        margin:30,

    },
    paper:{
        padding:1,
    },
    paper_complex:{
        margin:'auto',
        maxWidth:500,
        backgroundColor:'white'
    },
    img:{
        display:'block',
        margin:'auto'
    }
}))

const styles=({
    hello:{
        backgroundColor:'blue',
    }
})

class GridComponent extends Component {
    alexaAddon(){
        return(
            <Typography component="h1">Hi this is alexa</Typography>
        )
    }
    render() { 
        return ( 
            <>
                {this.alexaAddon()}
                <GridComplex/>
                <GridBasic/>
                <Typography component="h1" variant="h1" style={styles.hello}>ggg</Typography>
            </>
         );
    }
}

const GridComplex = () =>{
    const style=useStyle();
    return(
        <div className={style.root_complex} >
            <Grid spacing={3} style={{marginBottom:30}} elevation={4}>
                <Grid container xs={12} className={style.paper_complex} direction="row">
                    {/*center by paper margin auto*/}
                    
                        <Grid item xs={3} style={{padding:10}}>
                            <ButtonBase>
                            <img src="/logo192.png" width="100" height="50" alt="icon" style={{marginTop:'25%',marginBottom:'25%'}} ></img>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={7} style={{padding:10}}>
                            <Grid item xs>
                                <Typography component="p" variant="title">
                                    Standard license
                                </Typography>
                                <Typography component="p" variant="sub-title">
                                Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography component="p" variant="sub-title">
                                ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item xs style={{marginTop:20}}>
                                <Typography component="p" variant="title">
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs style={{padding:10}}>
                            $19.20
                        </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
const GridBasic =()=>{
    const style=useStyle();
    return(
        <div className={style.root}>
        <Grid container spacing={3}>    {/*spacing  between grid components*/}
         <Grid item sm={6} xs={12} md={12} lg={12} xl={6}>
              <Paper className={style.paper}>xs-6</Paper>
         </Grid>
         <Grid item sm={12} md={12}>
                <Paper>
                    <Grid container >
                     <Grid item sm={12} lg={6}>
                        <Typography variant="h1" color="initial">
                            This is me
                        </Typography>
                     </Grid>
                     <Grid item sm={12} lg={6}>
                        <Typography variant="h1" color="initial">
                            This is me
                        </Typography>
                     </Grid>
                 </Grid>
             </Paper>
         </Grid>
         <Grid item sm={12} md={12}>
             <Paper>
                 <Grid container direction="column" alignItems="center">
                     <Grid item sm={12} lg={6}>
                        <Typography variant="h1" color="initial">
                            This is me
                        </Typography>
                     </Grid>
                     <Grid item sm={12} lg={6}>
                        <Typography variant="h1" color="initial">
                            This is me
                        </Typography>
                     </Grid>
                 </Grid>
             </Paper>
         </Grid>
        </Grid>
        </div>
    )
}
 
export default GridComponent;
