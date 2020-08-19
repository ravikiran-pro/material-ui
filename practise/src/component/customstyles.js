import React from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const style = makeStyles((theme) => ({
    text:{
        color:'red',
        padding:theme.spacing(10),
    },
}));

export default function CustomStyles(){
    /*
        Makestyle using makeStyles 
        and use them on component using className
    */
        const styles=style();
        return(
            <>
            <Typography Component="h1" variant="h1" className={styles.text}>hello</Typography>
            <h1 className={styles.text}>welcome</h1>
            </>
        )
}
