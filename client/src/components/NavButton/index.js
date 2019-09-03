import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from 'react-scroll'
import "./style.css"

function NavButton() {
    return (
        <div className="nav-button-content">
         <Link
            to="portfolio" spy={true} 
            smooth={true}
            offset={-30}
            duraton={500}
         >
            <MDBBtn className="nav-button" outline={true}>
                View My Creations
            </MDBBtn>
         </Link>
        </div>
    )
}

export default NavButton;