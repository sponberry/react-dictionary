import React from "react";
import Definitions from "./Definitions";
import Rhymes from "./Rhymes";
import Synonyms from "./Synonyms";

import "./VocabularyDisplay.css";

export default function VocabularyDisplay(props) {

  function handleClick(event) {
    event.preventDefault();
    let audioClip = document.getElementById("vocal");
    try {
      audioClip.play();
    } catch(err) {
      event.target.classList.add("noPlay");
      console.log("audio clip error: could be does not exist")
    }};

  if (props.load && props.mode === "definition") {
    return (
        <div className="vocabulary-display">
        <div className="spacer-twenty"></div>
        <div className="card mt-5 mx-5">
          <div className="card-body mx-5 px-5 mt-3 pt-5">
            <h2 className="card-title vocabulary-title">
                {props.word[0].word}
            </h2>
            <h6 className="card-subtitle text-muted pronunciation">
                {"[ "}{props.word[0].phonetics[0].text}{" ]"} 
                <audio preload="auto" id="vocal"><source src={props.word[0].phonetics[0].audio} /></audio>
                <a href="/" rel="noreferrer" className="icons" onClick={handleClick}>🔊</a>
            </h6>
            <p className="example">{props.word[0].meanings[0].definitions[0].example}</p>
            <hr />
              {props.word[0].meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Definitions  definition={meaning} />
                  </div>
                )
              })}
            <div className="row mt-5">
              <div className="col-md-6">
                <Rhymes rhymes={props.rhymes} />
              </div>
              <div className="col-md-6">
                <Synonyms synonyms={props.word[0].meanings[0].definitions[0].synonyms}/>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
    } else {
      return null
    }
}