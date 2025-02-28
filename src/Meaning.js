import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  function meaningQuotes() {
    if (props.meaning.example) {
      return `"${props.meaning.example}"`;
    } else {
      return null;
    }
  }

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="Definition">
        <strong>Definition:</strong> {props.meaning.definition}
      </div>
      <div className="Example">
        {props.meaning.example ? `"${props.meaning.example}"` : null}
      </div>
      <div className="Synonyms">
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
