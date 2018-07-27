// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

let root = document.getElementById('root')
if (root !== null)
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    root
  );

registerServiceWorker();
