import React from "react";
import Container from "../components/Container";

function Landing() {
        return (
           <Container>
                <h1>My name is <span className="accent-color">Marguerite Shuster</span>.</h1>
                <h1>I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span></h1>
           </Container>
        );
}


export default Landing;