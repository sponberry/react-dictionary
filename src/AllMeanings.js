import React from "react";
import Definitions from "./Definitions";

import "./VocabularyDisplay.css";

export default function MeaningSet(props) {
    return (
        <span>
        {props.meaningSet.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Definitions  definition={meaning} />
              </div>
            )
          })}
          </span>
    )
}