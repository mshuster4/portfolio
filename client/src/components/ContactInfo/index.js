import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap"
import { MDBBtn, MDBIcon } from "mdbreact";
import "./style.css";


function ContactInfo() {
  return (
     <Row>
        <Col sm={12}>
          <div className="social-buttons">
            <MDBBtn floating outline={true} href="mailto:margy.shuster@gmail.com" target="_blank" className="contact-button"><MDBIcon icon="envelope-square" /></MDBBtn>
            <MDBBtn floating outline={true} href="https://www.facebook.com/margy.shuster" target="_blank" className="contact-button"><MDBIcon fab icon="facebook-f" /></MDBBtn>
            <MDBBtn floating outline={true} href="https://github.com/mshuster4" target="_blank"  className="contact-button"><MDBIcon fab icon="github"/></MDBBtn>
            <MDBBtn floating outline={true} href="https://www.linkedin.com/in/marguerite-shuster/" target="_blank" className="contact-button"><MDBIcon fab icon="linkedin-in" /></MDBBtn>
            <MDBBtn floating outline={true} href="https://www.instagram.com/emrozesd/" target="_blank" className="contact-button"><MDBIcon fab icon="instagram"/></MDBBtn>
          </div>
        </Col>
    </Row>
  );
}

export default ContactInfo;