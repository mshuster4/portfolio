import React from "react";
import Container from 'react-bootstrap/Container'
import BackgroundImage from "../components/BackgroundImage";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header"
import NavButton from "../components/NavButton"

function Landing() {
        return (
          <div className="landing-page">
            <Container className="landing-container">
                <BackgroundImage>
                  <CallToAction>
                    <Header/>
                    <NavButton/>
                  </CallToAction>
                </BackgroundImage>
            </Container>
          </div>
        );
}


export default Landing;