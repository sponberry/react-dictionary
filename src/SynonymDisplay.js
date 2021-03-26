import React from "react";
import Synonyms from "./Synonyms";

import "./VocabularyDisplay.css";

export default function SynonymDisplay(props) {
  if (props.load && props.mode === "synonyms") {
    return (
        <div className="vocabulary-display">
        <div className="spacer-twenty"></div>
        <div className="card mt-5 mx-5">
          <div className="card-body mx-5 px-5 mt-3 pt-5">
            <h2 className="card-title vocabulary-title">
            {props.word[0].word}
            </h2>
            <p className="example">synonym search</p>
            <hr />
            <Synonyms synonyms={props.word[0].meanings[0].definitions[0].synonyms}/>
            </div>
          </div>
        </div>
    )
    } else {
      return null
    }
}