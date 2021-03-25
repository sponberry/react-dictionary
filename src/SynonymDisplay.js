import React from "react";
import Synonyms from "./Synonyms";

export default function SynonymDisplay(props) {

// needed: a load prop, the word prop, synonyms prop
  if (props.load && props.mode === "synonyms") {
    return (
        <div className="vocabulary-display">
        <div className="spacer-twenty"></div>
        <div className="card mt-5 mx-5">
          <div className="card-body mx-5 px-5 mt-3 pt-5">
            <h2 className="card-title vocabulary-title">
            {props.word}
            </h2>
            <p className="example">synonym search</p>
            <hr />
            <Synonyms synonyms={props.synonyms}/>
            </div>
          </div>
        </div>
    )
    } else {
      return null
    }
}