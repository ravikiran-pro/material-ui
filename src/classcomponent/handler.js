//An example for how styles work in class component
import React, { Component,useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {spacing} from '@material-ui/system';


class HanlderExample extends Component{
    state={
        select:'1'
    }
    handleButtonClick = ()=>{
        alert("button clicked");
    }
    handleSelectClick=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        ///for multiple handle click
    }
    render(){
            return(
                <>
                    <Button onClick={this.handleButtonClick} variant="contained" color="primary" m={4} spacing={4}>hello</Button> 
                    <select name="select" value={this.state.select} onChange={this.handleSelectClick}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                    </select>
                    <HooksExample/>
                </>
            )
    }
}

export default HanlderExample;

function HooksExample(){
    const val="hello welcome";
    const [buttonvalue,handleButtonClick] = useState(null)
    ///useEffect example
    useEffect(()=>{
        var datafromapi=20;
        handleButtonClick(datafromapi);
        console.log('is working');
    },[]);
    return(
        <div>
        <h1>{val},An Example of react hoooks</h1>
        <Button variant="contained" color="secondary" size="large" onClick={()=>handleButtonClick("change")} >click me to see how hooks works
        Value before click {buttonvalue}
        </Button>
        <PassingHooksEventHandler value={buttonvalue} event={handleButtonClick}/>
        </div>
    )
}
function PassingHooksEventHandler(props){
    return(
        <div>
            <h1>{props.value}</h1>
            <Button variant="contained" size="large" color="secondary" onClick={()=>props.event('changed')}>
                This is can also change the parent hook
            </Button>
        </div>

    )
}
