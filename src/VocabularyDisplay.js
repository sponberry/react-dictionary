import React from "react";

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
                {"[ "}{props.pronunciation}{" ]"} <a href={props.link} rel="noreferrer" className="icons">🔊</a>
            </h6>
            <hr />
            <h3 className="card-subtitle word-category">
                noun
            </h3>
            <hr className="category-underline" />
            <p className="definition">
                1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus libero suscipit, sodales dui et, ultrices ipsum. Praesent sit amet eros eget est vestibulum congue. Morbi ante massa, suscipit in odio et
            </p>
            <p className="definition">
                2 Sed faucibus felis a cursus convallis. Phasellus a sem varius, imperdiet sem vulputate, facilisis urna. Suspendisse potenti. Donec quis tortor sollicitudin, cursus lorem accumsan, vehicula enim. 
            </p>
            <h3 className="card-subtitle word-category">
                adj.
            </h3>
            <hr className="category-underline" />
            <p className="definition">
                1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus libero suscipit, sodales dui et, ultrices ipsum. Praesent sit amet eros eget est vestibulum congue. Morbi ante massa, suscipit in odio et
            </p>
            <p className="definition">
                2 Sed faucibus felis a cursus convallis. Phasellus a sem varius, imperdiet sem vulputate, facilisis urna. Suspendisse potenti. Donec quis tortor sollicitudin, cursus lorem accumsan, vehicula enim. 
            </p>
            <div className="row mt-5">
              {/* column 1 */}
              <div className="col-md-6">
                <h2 className="card-title">
                  Origin
                </h2>
                  <p>
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
                <h2 className="card-title">
                  Synonyms
                </h2>
                  <p>
                  Lorem, ipsum, dolor sit, amet, consectetur, adipiscing, elit.
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