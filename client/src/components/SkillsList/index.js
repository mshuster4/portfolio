import React from "react"
import { ListGroup, Card } from 'react-bootstrap'
import "./style.css";

function SkillsList(props) {
    const skills = props.skills;
    const listItems = skills.map((skills, index) => 
            <ListGroup.Item key={index}>{skills}</ListGroup.Item>
    );
    return (
        <div>
          <Card className="skills-card text-center">
            <Card.Header>
              <h5><b>{props.skillsListHeader}</b></h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {listItems}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
    )
}

export default SkillsList;