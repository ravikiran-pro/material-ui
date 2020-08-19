import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Button } from '@material-ui/core';


export default function HiddenComponet(){
    return(
        <>
            <h1>Bootstrap replacement</h1>
            <Hidden mdUp>
                <Button variant="contained" color="primary">Icon</Button>
            </Hidden>
            <h1>material-ui drawer theme</h1>
            <Hidden smUp>
                <Button variant="contained" color="primary">IconHidden</Button>
            </Hidden>
            <Hidden xsDown>
                <Button variant="contained" color="primary">IconShow</Button>
            </Hidden>
            <p>icon show on screen size change</p>
        </>
    )
}