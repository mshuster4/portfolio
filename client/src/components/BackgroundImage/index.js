import React, { useState, useEffect } from "react"
import LandingImgLg from "../../assets/landing-page-lg.png";
import LandingImgSm from "../../assets/landing-page-sm.png";
import "./style.css";

function BackgroundImage(props) {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const imageURL = window.innerWidth >= 568 ? LandingImgLg : LandingImgSm;

     const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

     useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
       <div className="background-img" style={{ backgroundImage: `url(${imageURL})` }}>
            {props.children}
       </div>
    )
}

export default BackgroundImage; 