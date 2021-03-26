import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./SynonymsRhymes.css";

export default function ExpandedList(props) {
  if (props.list.length > 0) {
    return (
      <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Read more
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <ul>
          <Card.Body className="ml-n3 mt-n3">{props.list.map(function (word, index) {
            if (index < 15) {
            return (
              <li className="ml-n1" key={index}>
                {word}
              </li>
            )
            } else {
              return null
            }
          })}</Card.Body>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    )
  } else {
    return null
  }
}