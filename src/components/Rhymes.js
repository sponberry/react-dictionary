import React from "react";
import ExpandedList from "./ExpandedList";

import "../styles/SynonymsRhymes.css";

export default function Rhymes(props) {
    let moreRhymes = []

    if (props.rhymes.length !== 0) {
      return (
        <span>
          <h2 className="card-title">
            Rhymes
          </h2>
          <ul className="rhymes">
            {props.rhymes.map(function (rhyme, index) {
              if (index <= 5) {
                return(
                  <li key={index}>
                    {rhyme.word}
                  </li>
                );
                } else {
                  moreRhymes.push(rhyme.word);
                  return null
                }
            })}
          </ul>
          <ExpandedList list={moreRhymes} />
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