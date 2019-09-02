import React from "react";
import Icon from "../Icon";
import { MDBBtn } from "mdbreact"

function PortfolioButton(props) {
    return(
        <MDBBtn
          className = "portfolio-button"
          outline={true}
          size = "sm"
          onClick={props.onClick}
        >
            Learn More <Icon icon={["fas", "book-open"]} />
        </MDBBtn>

    );
}

export default PortfolioButton