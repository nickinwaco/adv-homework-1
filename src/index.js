/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';




function IncreaseCart () {
  state.numberOfItemsInCart +=1;
  console.log(state.numberOfItemsInCart);


  ReactDOM.render(
    <App state = {state} inCrease={IncreaseCart}/>,
    document.getElementById('root')
  );

}





ReactDOM.render(
  <App state = {state} inCrease={IncreaseCart}/>,
  document.getElementById('root')
);
