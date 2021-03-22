import React from "react";

export default function Synonyms(props) {

    return (
      <span className="synonyms">
        <h2 className="card-title">
          Synonyms
        </h2>
        <p>
          {props.synonyms.map(function (synonym, index) {
            return(
              <div key={index}>
                {synonym}
              </div>
            )
          })}
          <button class="btn btn btn-outline-secondary p-1 ml-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Read more
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </span>
    )
}