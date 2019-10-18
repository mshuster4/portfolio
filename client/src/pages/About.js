import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { MDBBtn } from "mdbreact";
import TextBlock from "../components/TextBlock";
import AboutImage from "../components/AboutImage";
import SkillsList from "../components/SkillsList";
import Resume from "../assets/Marguerite-Shuster-Resume.pdf";
import ScrollAnimation from 'react-animate-on-scroll';



const DesignSkills = [ 
                        "Photoshop", 
                        "Illustrator",
                        "InDesign",
                        "Animation",
                        "Wireframing",
                        "Responsive Design",
                        "SEO"
                    ];

const DevelopmentSkills = [ 
                            "HTML/CSS", 
                            "Bootstrap",
                            "JavaScript",
                            "Node.js/Express.js",
                            "React.js",
                            "MySql",
                            "MongoDB"
                           ];

class About extends Component {
    render() {
        return (
          <div id="about">
          <ScrollAnimation animateIn="fadeIn">
            <Container className="about-container pt-4 pb-4">
                <Row>
                  <Col sm={12}>
                    <Card className="mb-3 text-center text-md-left">
                      <Card.Header>
                         <h5><b>About Me</b></h5>
                      </Card.Header>
                      <Card.Body>
                      <Row className="align-items-center">
                        <Col sm={12} md={5} lg={{ span: 4, offset: 1}} className="d-flex justify-content-center mb-3 mb-md-0">
                          <AboutImage/>
                        </Col>
                        <Col sm={12} md={7} lg={6}>
                          <TextBlock/>
                          <MDBBtn
                            tag="a"
                            href={Resume}
                            target="_blank"
                            outline={true}
                            className="about-button ml-0 mr-2"
                            color="black"
                          >
                            View Resume
                          </MDBBtn>
                           <Link
                              to="contact" spy={true} 
                              smooth={true}
                              offset={-30}
                              duraton={500}
                          >
                            <MDBBtn
                                outline={true}
                                className="about-button ml-0 mr-0"
                                color="black"
                            >
                                Say Hello
                            </MDBBtn>
                          </Link>
                        </Col>
                        <Col lg={1}></Col>
                       </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6} className="mb-3 mb-md-0">
                        <SkillsList
                          skills={DevelopmentSkills}
                          skillsListHeader="Development Skills"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <SkillsList
                          skills={DesignSkills}
                          skillsListHeader="Design Skills"
                        />
                    </Col>
                </Row>
            </Container>
            </ScrollAnimation>
           </div>
        )
    }
}

export default About 