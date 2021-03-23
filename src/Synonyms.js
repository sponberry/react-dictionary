import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Synonyms(props) {
    let moreSynonyms = []

    if (props.synonyms) {
      return (
        <span className="synonyms">
          <h2 className="card-title">
            Synonyms
          </h2>
          <p>
            {props.synonyms.map(function (synonym, index) {
              if (index <= 5) {
                return(
                  <div key={index}>
                    {synonym}
                  </div>
                );
                } else {
                  moreSynonyms.push(synonym);
                }
            })}
            </p>
          <Accordion>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Read more
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{moreSynonyms.map(function (synonym, index) {
                return (
                  <div key={index}>
                    {synonym}
                  </div>
                )
              })}</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </span>
      )
    } else {
      return (
        <span className="synonyms">
          <h2 className="card-title">
            Synonyms
          </h2>
          <p>
            None found.
          </p>
        </span>
      )
    }
}