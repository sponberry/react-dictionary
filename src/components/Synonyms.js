import React from "react";
import ExpandedList from "./ExpandedList";

import "../styles/SynonymsRhymes.css";

export default function Synonyms(props) {
    let moreSynonyms = []

    if (props.synonyms) {
      return (
        <span>
          <h2 className="card-title">
            Synonyms
          </h2>
          <ul className="synonyms">
            {props.synonyms.map(function (synonym, index) {
              if (index <= 5) {
                return(
                  <li key={index}>
                    {synonym}
                  </li>
                );
                } else {
                  moreSynonyms.push(synonym);
                  return null
                }
            })}
          </ul>
          <ExpandedList list={moreSynonyms} />
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