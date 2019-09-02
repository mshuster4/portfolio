import React from "react";
import "./style.css"

function ProjectTitle (props) {
    return (
       <h5 className="project-title">{props.children}</h5>
    )
}

export default ProjectTitle