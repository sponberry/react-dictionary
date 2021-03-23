import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

export default function VocabularyDisplay(props) {

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
                <h2 className="card-title">
                  Rhymes
                </h2>
                <p>
                  {/* use this api: https://api.datamuse.com/words?rel_rhy=forgetful&nry=forgetful */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus a sem varius,
                  <button class="btn btn btn-outline-secondary p-1 ml-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Read more
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
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