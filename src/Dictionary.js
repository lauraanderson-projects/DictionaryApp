import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    //https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "bd809658a5b50o74b7f3fe9fa5dft8a8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="headingSearch">
          <header className="App-header">
            <h1>Dictionary</h1>
            <div className="headliner">What word do you want to look up?</div>
          </header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="true"
              onChange={handleKeywordChange}
              placeholder="Search word, example Hello"
            />
            <div className="hint">suggested words: sunset, home, happy...</div>
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
