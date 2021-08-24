import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SemaforoTop} from './SemaforoTop';
import {Semaforocuerpo} from './SemaforoCuerpo';
import reportWebVitals from './reportWebVitals';
import {App, Appa} from "./objetos" 

ReactDOM.render(
  <React.StrictMode>
    <SemaforoTop />
    <Semaforocuerpo />
    <App />
    <Appa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
