import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from "react-bootstrap"
import PortfolioButton from "../components/PortfolioButton";
import ProjectTitle from "../components/ProjectTitle";
import PortfolioImage from "../components/PortfolioImage"
import blockPreview from "../assets/block-party-preview.png";
import campPreview from "../assets/camp-preview.png";
import readingPreview from "../assets/reading-preview.png";
import friendPreview from "../assets/friend-preview.png";
import brewsPreview from "../assets/brews-preview.png";
import mongoPreview from "../assets//mongo-preview.png";


class Portfolio extends Component {

  constructor(props) {
    super(props);
      this.handleClick.bind(this)
  }

  handleClick(num) {
    this.props.toggle(num);
  }


  render() {
    return (
      <div className="portfolio-page">
       <ScrollAnimation animateIn="fadeIn">
        <Container className="portfolio-container mt-4 mb-4 mt-lg-0 mb--0">
          <Row>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <PortfolioImage
                img={blockPreview}
                alt="Block Party Preview"
              >
                <ProjectTitle>Block Party</ProjectTitle>
                <PortfolioButton
                   onClick = {() => this.handleClick(0)}
                />
              </PortfolioImage>
            </Col>

            <Col xs={12} md={6} lg={4} className="mb-4">
              <PortfolioImage
                img={readingPreview}
                alt="Reading Wishlist Preview"
              >
                <ProjectTitle>Reading Wishlist</ProjectTitle>
                <PortfolioButton
                  onClick = {() => this.handleClick(1)}
                />
               </PortfolioImage>
            </Col>

            <Col xs={12} md={6} lg={4} className="mb-4">
              <PortfolioImage
                img={friendPreview}
                alt="Friend Finder Preview"
               >
                <ProjectTitle>Friend Finder</ProjectTitle>
                <PortfolioButton
                  onClick = {() => this.handleClick(2)}
                />
              </PortfolioImage>
            </Col>

            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
              <PortfolioImage
                img={campPreview}
                alt="Camp Wanna Preview"
              >
                <ProjectTitle>Camp Wannagetajob</ProjectTitle>
               <PortfolioButton
                 onClick = {() => this.handleClick(3)}
               />
              </PortfolioImage>
            </Col>

            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
              <PortfolioImage
                img={brewsPreview}
                alt="Brews Beats Preview"
              >
                <ProjectTitle>
                  Brews <span>&amp;</span> Beats
                </ProjectTitle>
               <PortfolioButton
                 onClick = {() => this.handleClick(4)}
               />
              </PortfolioImage>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <PortfolioImage
                img={mongoPreview}
                alt="News Scraper Preview"
              >
                <ProjectTitle>News Scraper</ProjectTitle>
               <PortfolioButton
                 onClick = {() => this.handleClick(5)}
               />
              </PortfolioImage>
            </Col>

          </Row>

        </Container>
        </ScrollAnimation>
      </div>
      );
   }

};

export default Portfolio;

