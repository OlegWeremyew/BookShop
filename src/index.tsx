import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core';

import { App } from './components';
import { store } from './redux/store';
import { Provider } from 'react-redux';

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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
