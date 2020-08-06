import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const theme = createMuiTheme( {
  typography: {
      fontFamily: '"Noto Sans KR", serif',
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}><App />
  </MuiThemeProvider>,
  document.getElementById('root')
  //root라는 부분에 App.js를 그려라
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
