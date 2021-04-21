import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createMuiTheme,ThemeProvider } from '@material-ui/core';



ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider >  
          <App  />
      </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);