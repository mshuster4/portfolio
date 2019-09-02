import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import BackgroundImage from "../components/BackgroundImage";
import CallToAction from "../components/CallToAction";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from "../components/Header"
import NavButton from "../components/NavButton"

class Landing extends Component {
    render() {
        return (
          <div className="landing-page">
           <ScrollAnimation animateIn="fadeIn">
                <Container className="landing-container">
                    <BackgroundImage>
                    <CallToAction>
                        <Header/>
                        <NavButton/>
                    </CallToAction>
                    </BackgroundImage>
                </Container>
            </ScrollAnimation>
          </div>
        );
    }
}


export default Landing;