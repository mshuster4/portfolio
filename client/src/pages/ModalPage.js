import React, { Component } from "react";
import { Modal } from 'react-bootstrap/'
import { MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact";
import Icon from "../components/Icon";
import ModalImage from "../components/ModalImage";
import ModalList from "../components/ModalList";

class ModalPage extends Component {

    constructor(props) {
      super(props);
    }

    render() {

        return (
        <Modal show={this.props.show} onHide={this.props.onHide} size="lg"> 
        <Modal.Header closeButton>
            <div className="modal-title">
                <h1 className="h1-responsive">{this.props.title}</h1>
                <p className="modal-tag"><i>{this.props.tagline}</i></p>
            </div>
        </Modal.Header>
            <MDBModalBody>
            <ModalImage
                imageOne = {this.props.imageOne}
                imageTwo= {this.props.imageTwo}
            />
            <p>{this.props.description}</p>
            <p>{this.props.role}</p>
            <ModalList
                techsUsed={this.props.techsUsed}
            />
        </MDBModalBody>
        <MDBModalFooter className="display-flex justify-content-center justyify-content-md-start">
            <MDBBtn
                outline={true}
                size = "md"
                color="black"
                className="modal-link mr-2"
                href={this.props.demo}
                target="_blank"
                rel="noopener noreferrer"
                tag="a"

            >
                Launch Demo <Icon icon={["fas", "rocket"]} />
            </MDBBtn>
                <MDBBtn
                outline={true}
                size = "md"
                color="black"
                className="modal-link ml-2"
                href={this.props.github}
                target="_blank"
                rel="noopener noreferrer"
                tag="a"

            >
                View Github <Icon icon={["fab", "github"]} />
            </MDBBtn>
        </MDBModalFooter>
        </Modal>
    );
  }
}

export default ModalPage