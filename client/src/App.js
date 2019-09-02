import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing"
import './App.css';

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
      <Landing/>
    );
  }
}

export default App;
