import React, { Component } from "react";
import ContactInfo from "../components/ContactInfo";
import ContactText from "../components/ContactText";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {

    render() {
      return(
        <div id="contact">
         <ScrollAnimation className="contact-content" animateIn="fadeIn">        
          <Container className="contact-container">
           <Row>
            <Col sm={12}>
              <ContactText/>
            </Col>
           </Row>
            <Row>
              <Col sm={12}>
               <ContactInfo/>
              </Col>
            </Row>
          </Container>
          </ScrollAnimation>
          <Footer/>
        </div>
        );
    }
}

export default Contact