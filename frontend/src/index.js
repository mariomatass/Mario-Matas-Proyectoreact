//Mario Matas Martin

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Provider} from 'react-redux';
import store from './store/index';

const theme = createTheme({
  palette: {
      mode: 'light', 
      primary: {
          main: '#1976D2', 
      },
      secondary: {
          main: '#E91E63',
      },
      text: {
          primary: '#333',
      },
      error: {
          main: '#f44336',
      },
      warning: {
          main: '#FFC107',
      },
      success: {
          main: '#4CAF50',
      },
      info: {
          main: '#2196F3',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
  },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeightRegular: 300,
      htmlFontSize: 18,
      button: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 100,
        lineHeight: 1.5,
      },
      overline: {
        fontFamily: 'Raleway',
      },
      body1: {
        fontSize: 18,
        fontWeight: 100,
      },
      body2: {
        fontSize: 18,
        fontWeight: 100,
        lineHeight: 1.5,
      },
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme = {theme}>
            <Provider store = {store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
