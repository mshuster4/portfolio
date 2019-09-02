import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import ModalPage from "./pages/ModalPage";
import blockScreenOne from "./assets/block-party-shot-one.png";
import blockScreenTwo from "./assets/block-party-shot-two.png";
import campScreenOne from "./assets/camp-shot-one.png";
import campScreenTwo from "./assets/camp-shot-two.png";
import readingScreenOne from "./assets/reading-shot-one.png"
import readingScreenTwo from "./assets/reading-shot-two.png"
import friendScreenOne from "./assets/friend-shot-one.png"
import friendScreenTwo from "./assets/friend-shot-two.png"
import brewsScreenOne from "./assets/brews-shot-one.png";
import brewsScreenTwo from "./assets/brews-shot-two.png";
import mongoScreenOne from "./assets/mongo-shot-one.png";
import mongoScreenTwo from "./assets/mongo-shot-two.png";
import projects from "./projects.json";
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
  fab,
  faRocket,
  faBookOpen,
  faArrowDown,
  faCode,
  faPenNib
);

class App extends Component {

 constructor(props) {    
    super(props);    
    this.state = {
      modal: false,
      title: "",
      tagline: "",
      description: "",
      role: "",
      imageOne: "",
      imageTwo: "",
      techsUsed: [],
      demo: "",
      github: "",
      navClassName: "",
      itemClassName: "",
      color: "",
      logo: ""
    }
    this.toggle.bind(this);
    this.onCloseModal.bind(this);
    this.connecToServer = this.connecToServer.bind(this);  
  }

  connecToServer() {    
    fetch('/');  
  }

  componentDidMount() {    
    this.connecToServer();  
  }

  toggle = (num) => {

  if (num === 0) {
    this.setState({ 
        modal: true,
        title: projects[0].title,
        tagline: projects[0].tagline,
        imageOne: blockScreenOne,
        imageTwo: blockScreenTwo,
        description: projects[0].description,
        role: projects[0].role,
        techsUsed: projects[0].techsUsed,
        demo: projects[0].demo,
        github: projects[0].github
      });
  }

  else if (num === 1) {
      this.setState({
          modal: true,
          title: projects[1].title,
          tagline: projects[1].tagline,
          imageOne: readingScreenOne,
          imageTwo: readingScreenTwo,
          description: projects[1].description,
          techsUsed: projects[1].techsUsed,
          demo: projects[1].demo,
          github: projects[1].github
      })
  }
  
  else if (num === 2) {
    this.setState({ 
        modal: true,
        title: projects[2].title,
        tagline: projects[2].tagline,
        imageOne: friendScreenOne,
        imageTwo: friendScreenTwo,
        description: projects[2].description,
        techsUsed: projects[2].techsUsed,
        demo: projects[2].demo,
        github: projects[2].github
      });
  }

  else if (num === 3) {
    this.setState({
        modal: true,
        title: projects[3].title,
        tagline: projects[3].tagline,
        imageOne: campScreenOne,
        imageTwo: campScreenTwo,
        description: projects[3].description,
        role: projects[3].role,
        techsUsed: projects[3].techsUsed,
        demo: projects[3].demo,
        github: projects[3].github
    })
  }

  else if (num === 4) {
    this.setState({
        modal: true,
        title: projects[4].title,
        tagline: projects[4].tagline,
        imageOne: brewsScreenOne,
        imageTwo: brewsScreenTwo,
        description: projects[4].description,
        role: projects[4].role,
        techsUsed: projects[4].techsUsed,
        demo: projects[4].demo,
        github: projects[4].github
    })
  }

  else if (num === 5) {
    this.setState({
        modal: true,
        title: projects[5].title,
        tagline: projects[5].tagline,
        imageOne: mongoScreenOne,
        imageTwo: mongoScreenTwo,
        description: projects[5].description,
        techsUsed: projects[5].techsUsed,
        demo: projects[5].demo,
        github: projects[5].github
    })
  }
};

  onCloseModal = () => {

    this.setState({ 
      modal: false,
      title: "",
      tagline: "",
      description: "",
      role: "",
      imageOne: "",
      imageTwo: "",
      techsUsed: []
    });

};



  render() {

    return (
      <div>
        <Landing/>
        <Portfolio
           toggle={(num) => this.toggle(num)}
        />
        <div>
          <ModalPage
            show={this.state.modal}
            onHide={this.onCloseModal}
            title={this.state.title}
            tagline={this.state.tagline}
            imageOne={this.state.imageOne}
            imageTwo={this.state.imageTwo}
            description={this.state.description}
            role={this.state.role}
            techsUsed={this.state.techsUsed}
            demo={this.state.demo}
            github={this.state.github}
          />
        </div>
      </div>
    );
  }
}

export default App;
