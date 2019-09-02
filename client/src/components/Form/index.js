import React from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import "./style.css";

function Form(props) {
    return (
         <form className="form-group" id="contact-form" onSubmit={props.onSubmit} method={props.method}>
            <MDBInput
              label="Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              name="name"
              autoComplete="off"
              value={props.name}
              onChange={props.onChange}
              required
            />
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              autoComplete="off"
              name="email"
              value={props.email}
              onChange={props.onChange}
              required
            />
            <MDBInput
              type="textarea"
              rows="3"
              label="Message"
              icon="pencil-alt"
              name="message"
              autoComplete="off"
              value={props.message}
              onChange={props.onChange}
              required
              />
      
            <div className="d-flex justify-content-center">
              <MDBBtn type="submit" outline={true} value="submit" className="send-button">Send <MDBIcon icon="paper-plane" /></MDBBtn>
            </div>
          </form>
    )
}

export default Form;