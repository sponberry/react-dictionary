import React from "react";
import Definitions from "./Definitions";
import Rhymes from "./Rhymes";
import Synonyms from "./Synonyms";

export default function VocabularyDisplay(props) {
  console.log(props.rhymes);


  if (props.load) {
    return (
        <div className="vocabulary-display">
        <div className="spacer-twenty"></div>
        <div className="card mt-5 mx-5">
          <div className="card-body mx-5 px-5 mt-3 pt-5">
            <h2 className="card-title vocabulary-title">
                {props.word}
            </h2>
            <h6 className="card-subtitle text-muted pronunciation">
                {"[ "}{props.pronunciation.text}{" ]"} <a href={props.pronunciation.link} rel="noreferrer" className="icons">🔊</a>
            </h6>
            <hr />
              {props.definitionsArray.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Definitions  definition={meaning} />
                  </div>
                )
              })}
            <div className="row mt-5">
            {/* column 1 */}
              <div className="col-md-6">
                <Rhymes rhymes={props.rhymes} />
              </div>
              {/* column 2 */}
              <div className="col-md-6">
                <Synonyms synonyms={props.synonyms}/>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
    } else {
      return (
        <div></div>
      )
    }
}