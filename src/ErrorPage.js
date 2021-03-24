import React from "react";

export default function ErrorPage(props) {

    if (props.error) {
        return (
          <div className="error">
            <div className="spacer-twenty"></div>
            <div className="card mt-5 mx-5">
              <div className="card-body">
              <div className="spacer-twenty"></div>
                <h2 className="card-title text-center">
                  Could not find word 🤦🏽‍♀️
                </h2>
                <p className="example text-center">Sorry! Try another search?</p>
              </div>
            </div>
          </div>
        )
    } else {
      return null
    }
}