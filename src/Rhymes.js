import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Rhymes(props) {
    let moreRhymes = []

    if (props.rhymes) {
      return (
        <span className="rhymes">
          <h2 className="card-title">
            Rhymes
          </h2>
          <p>
            {props.rhymes.map(function (rhyme, index) {
              if (index <= 5) {
                return(
                  <div key={index}>
                    {rhyme.word}
                  </div>
                );
                } else {
                  moreRhymes.push(rhyme.word);
                  return (
                    <span key={index}></span>
                  )
                }
            })}
          </p>
          <Accordion>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Read more
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{moreRhymes.map(function (word, index) {
                return (
                  <div key={index}>
                    {word}
                  </div>
                )
              })}</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </span>
      )
    } else {
      return (
        <span className="rhymes">
          <h2 className="card-title">
            Rhymes
          </h2>
          <p>
            None found.
          </p>
        </span>
      )
    }
}