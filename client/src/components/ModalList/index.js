import React from 'react';
import "./style.css"


function ModalList(props) {
    const techs = props.techsUsed;
    const listItems = techs.map((tech, index) => 
        <li key={index}>{tech}</li>
    );
    return (
        <div className="modal-list">
            <h4 className="modal-list-header">Technologies Used</h4>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ModalList