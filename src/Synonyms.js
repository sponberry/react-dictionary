import React from "react";
import ExpandedList from "./ExpandedList";

export default function Synonyms(props) {
    let moreSynonyms = []

    if (props.synonyms) {
      return (
        <span>
          <h2 className="card-title">
            Synonyms
          </h2>
          <p className="synonyms">
            {props.synonyms.map(function (synonym, index) {
              if (index <= 5) {
                return(
                  <div key={index}>
                    {synonym}
                  </div>
                );
                } else {
                  moreSynonyms.push(synonym);
                  return (
                    <span></span>
                  )
                }
            })}
          </p>
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