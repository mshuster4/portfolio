import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import {
  faRocket,
  faBookOpen,
  faArrowDown,
  faCode,
  faPenNib
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faRocket,
  faBookOpen,
  faArrowDown,
  faCode,
  faPenNib,
);

class App extends Component {

 constructor(props) {    
    super(props);    
    this.state = {}    
    this.connecToServer = this.connecToServer.bind(this);  
  }

  connecToServer() {    
    fetch('/');  
  }

  componentDidMount() {    
    this.connecToServer();  
  }

  render() {

    return (
      <div>
        <Landing/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
