import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';

export default function ContainerExample() {
  return (
      <>
        {/* container responsive is free size container comes with xl,sm,md,lg,xl */}
         <ContainerResponsive/>
        {/* container fixed is position fixed ..where the container doesn't move on scroll */}
         <ContainerFixed/>
         
         {
            ///common points
            /* can be wrapped under container using typograph component div*/
            
         }
      </>
  );
}

const ContainerResponsive=()=>{
    return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <Typography variant='p' component="p">
              container is used to create wrapper around group of components
          </Typography> 
          <Typography variant='p' component="p">
              Container comes in two types maxwidth and fixed
              <ListItem>
                <ul>
                    <li>normal html tags 1</li>
                    <li>ravikiran html tags 2</li>
                </ul>
              </ListItem>
          </Typography> 
        </Typography>
      </Container>
    </React.Fragment>
    )
}
const ContainerFixed=()=>{
    return(
        <React.Fragment>
            <CssBaseline/>
            <Container fixed style={{backgroundColor:'orange',height:'100vh'}} disableGutters>

            </Container>
        </React.Fragment>
    )
}