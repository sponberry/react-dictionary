import React from "react";

export default function Meaning(props) {

    return (
        <p className="definition">
            {props.number} {props.wordDefinition.definition}
        </p>
    )
}