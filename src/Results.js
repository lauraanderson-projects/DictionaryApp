import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  // Check if results exist and have meanings
  if (
    !props.results ||
    !props.results.meanings ||
    props.results.meanings.length === 0
  ) {
    return (
      <div className="Results">
        <section className="error-message">
          No definitions found. Try another word.
        </section>
      </div>
    );
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>
      </section>

      {props.results.meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
