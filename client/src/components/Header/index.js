import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="header-content">
            <h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1>
            <h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1>
        </div>
    );
}

export default Header; 