import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import dotenv from 'dotenv';
import Landing from "./pages/Landing";

 
dotenv.config();


ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
, document.getElementById('root'));


