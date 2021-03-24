import React from "react";
import ExpandedList from "./ExpandedList";

export default function Rhymes(props) {
    let moreRhymes = []

    if (props.rhymes.length < 1) {
      return (
        <span>
          <h2 className="card-title">
            Rhymes
          </h2>
          <p className="rhymes">
            {props.rhymes.map(function (rhyme, index) {
              if (index <= 5) {
                return(
                  <div key={index}>
                    {rhyme.word}
                  </div>
                );
                } else {
                  moreRhymes.push(rhyme.word);
                  return null
                }
            })}
          </p>
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