import React from "react";
import { MDBMask, MDBView } from "mdbreact";
import "./style.css"

function PortfolioImage(props) {

  return (
      <div className="portfolio-image">
          <MDBView hover>
                <img
                    src={props.img}
                    className="img-fluid portfolio-image" 
                    alt={props.alt}
                />
              <MDBMask overlay="black-strong" className="text-center">
                  {props.children}
              </MDBMask>
          </MDBView>
      </div>
  );
}

export default PortfolioImage;