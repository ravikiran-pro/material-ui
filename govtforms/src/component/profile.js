import React from 'react';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';

export default function ProfileIcon(props){
    const styles={
        root:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'50%',
            backgroundColor:props.backgroundColor,
            width:parseInt(props.size),
            height:parseInt(props.size),
        },
        icon:{
            fontSize:parseInt(props.iconSize),
            color:props.iconColor,
        }
    }
    return(
        <Box style={styles.root}>
            <PersonIcon style={styles.icon}/>
        </Box>
    )
}