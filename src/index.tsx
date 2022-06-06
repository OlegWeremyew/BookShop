import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core';

import { App } from './components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a68357',
    },
    secondary: {
      main: '#5f79bb',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);