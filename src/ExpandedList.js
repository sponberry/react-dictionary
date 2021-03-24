import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ExpandedList(props) {

  if (props.list) {
    return (
      <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Read more
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="ml-n3 mt-n3">{props.list.map(function (word, index) {
            if (index < 15) {
            return (
              <div key={index}>
                {word}
              </div>
            )
            } else {
              return null
            }
          })}</Card.Body>
        </Accordion.Collapse>
      </Accordion>
    )
  } else {
    return null
  }
}