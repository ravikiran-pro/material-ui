import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Text(props){
    return(
        <TextField 
            id="outlined-search" 
            label={props.name} 
            type="search" 
            variant="outlined" 
            style={{width:'100%'}}
            />
    )
}