/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

ReactDOM.render(
  <App productList = {state}/>,
  document.getElementById('root')
);
