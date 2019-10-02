import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap"
import { MDBBtn, MDBIcon } from "mdbreact";
import "./style.css";

const Footer = () => {
  return (
    <MDBFooter color="special-color-dark" className="footer">
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          <p className="mb-0">&copy;  Copyright {new Date().getFullYear()}</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;

