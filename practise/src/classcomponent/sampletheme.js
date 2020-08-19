import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fc8803',
    },
  },
});

export default function ThemeChanger() {
  return (
    <ThemeProvider theme={Theme}>
      <Hidden xsDown>
      <Button color="primary">Primary</Button>
      </Hidden>
      <Hidden>
      <Button color="secondary">Secondary</Button>
      </Hidden>
    </ThemeProvider>
  );
}
