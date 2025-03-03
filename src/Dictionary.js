import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  async function search() {
    //https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "bd809658a5b50o74b7f3fe9fa5dft8a8";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    try {
      const dictionaryResponse = await axios.get(apiUrl);
      handleDictionaryResponse(dictionaryResponse);
    } catch (error) {
      console.error("Dictionary API Error: ", error);
      setError("Failed to fetch dictionary results. Please try again.");
    }

    //axios.get(apiUrl).then(handleDictionaryResponse);

    const imagesApiKey = "bd809658a5b50o74b7f3fe9fa5dft8a8";
    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;

    try {
      const photosResponse = await axios.get(imagesApiUrl);
      handlePhotosResponse(photosResponse);
    } catch (error) {
      console.error("Image API Error: ", error);
      setError("Failed to fetch images. Please try again.");
    }
    //axios.get(imagesApiUrl).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError(null); //Clear previous errors before searching
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
              required
              placeholder="Search word, example Hello"
            />
            <div className="hint">suggested words: sunset, home, happy...</div>
          </form>
          {error && <div className="error-message">{error}</div>}
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
