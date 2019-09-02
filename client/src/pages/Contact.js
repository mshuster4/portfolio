import React, { Component } from "react";
import Form from "../components/Form";
import Footer from "../components/Footer"
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import * as EmailValidator from 'email-validator';

class Contact extends Component {

    constructor(props, context) {
    super(props, context);
    this.state = {
        name: "",
        email: "",
        message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
      const name = this.state.name;
      const email = this.state.email;
      const message = this.state.message;
      const isValid = EmailValidator.validate(this.state.email);

      if (isValid === true) {
        console.log(name, email, message);
        console.log(isValid)
          axios({
              method: "POST", 
              url:"/send", 
              data: {
                  name: name,   
                  email: email,  
                  message: message
              }
          }).then((response)=>{
              if (response.data.msg === 'success'){
                  alert("Message Sent."); 
                  this.resetForm()
              }else if(response.data.msg === 'fail'){
                  alert("Message failed to send.")
              }
        })
      }

     else { 
          alert("Please enter a valid e-mail address.")

      }

};

 resetForm() {
   this.setState({
        name: "",
        email: "",
        message: ""
   })
 };


    render() {
      return(
        <div className="contact-page">
          <Container className="contact-container">
           <Row>
            <Col sm={12} className="mt-3">
              <h4 className="h4-responsive text-center">
               Need a web developer to polish your company's online presence?  Have a design idea you would like to discuss?  
             </h4>
              <h4 className="h3-responsive text-center">Drop me a line below!</h4>
            </Col>
           </Row>
            <Row>
              <Col sm={{span: 8, offset: 2}}>
                  <Form
                    onSubmit={this.handleSubmit}
                    method="POST"
                    name={this.state.name}
                    email={this.state.email}
                    message={this.state.message}
                    onChange={this.handleChange}  
                  />
              </Col>
            </Row>
          </Container>
          <Footer/>
        </div>
        );
    }
}

export default Contact