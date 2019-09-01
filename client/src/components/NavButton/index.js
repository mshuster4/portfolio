import React from "react";
import { MDBBtn } from "mdbreact";
import "./style.css"

function NavButton() {
    return (
        <div className="nav-button-content">
            <MDBBtn className="nav-button" outline={true}>
                View My Creations
            </MDBBtn>
        </div>
    )
}

export default NavButton;