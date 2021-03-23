import React from "react";
import Meaning from "./Meaning";

export default function Definitions(props) {

  return (
    <div className="definitions">
      <h3 className="card-subtitle word-category">
        {props.definition.partOfSpeech}
      </h3>
      <hr className="category-underline mt-2" />
        {props.definition.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <Meaning wordDefinition={definition} number={index + 1} />
            </div>
          )
        })}
    </div>   
  )
}