import React, { useState } from "react";
import "./dictionary.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import VocabularyDisplay from "./VocabularyDisplay";
import ErrorPage from "./ErrorPage";
import SynonymDisplay from "./SynonymDisplay";

export default function DictionarySearch() {
  let [vocabulary, setVocabulary] = useState(null);
  let [currentWord, setCurrentWord] = useState({ready:false});
  let [rhymes, setRhymes] = useState([]);
  let [foundError, setFoundError] = useState(false);
  let [searchMode, setSearchMode] = useState("definition");

  function handleTyping(event) {
    setVocabulary(event.target.value);};

  function getWordData(response) {
    if (response.status !== 200) {
      console.log("An error occurred");
    } else {
      setFoundError(false);
      setCurrentWord({
        ready: true,
        word: response.data[0].word,
        pronunciation: response.data[0].phonetics[0],
        definitionsArray: response.data[0].meanings,
        synonyms: response.data[0].meanings[0].definitions[0].synonyms,
      });
    }};

  function getRhymes(response) {
    if (response.status !== 200) {
      alert("An error occurred");
      setVocabulary(null);
    } else {
      setRhymes(response.data);
    }};

  function handleSearch(event) {
    event.preventDefault();
    setCurrentWord({ready:false});
    let dictApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${vocabulary}`;
    let museApiUrl = `https://api.datamuse.com/words?rel_rhy=${vocabulary}`
    axios.get(museApiUrl).then(getRhymes);
    setTimeout(() =>
      {axios.get(dictApiUrl).then(function (response) {
        getWordData(response);
      })
      .catch(function (error) {
        setFoundError(true);
        if (error.status === 404) {  
          console.log("404 error caught");
          return Promise.reject(error);
          } else {
          console.log("other error");
          return Promise.reject(error);
      }})
      .catch(error => Promise.reject(error))
        }, 500
    );};

    function definitionMode(event) {
      event.preventDefault();
      setSearchMode("definition");
    }
    function synonymMode(event) {
      event.preventDefault();
      setSearchMode("synonyms");
    }
  
    return (
      <div className="dictionary">
        <h1>What's the word? Dict</h1>
        <div className="spacer-twenty"></div>
        <form className="form-control form-control-lg" onSubmit={handleSearch}>
        <InputGroup className=" border rounded-pill">
          <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Search for"
          id="input-group-dropdown-1">
            <Dropdown.Item href="/" onClick={definitionMode}>Definition</Dropdown.Item>
            <Dropdown.Item href="/" onClick={synonymMode}>Synonyms</Dropdown.Item>
          </DropdownButton>
          <input type="search" className="form-control search-box" placeholder="type a word..." onChange={handleTyping}/>
          <input type="submit" className="btn btn-outline-secondary mb-1" value="🔍"/>
          </InputGroup>
        </form>
        <VocabularyDisplay 
        load={currentWord.ready}
        mode={searchMode}
        word={currentWord.word}
        pronunciation={currentWord.pronunciation}
        definitionsArray={currentWord.definitionsArray}
        synonyms={currentWord.synonyms}
        rhymes={rhymes}
         />
         <SynonymDisplay
         load={currentWord.ready}
         mode={searchMode}
         word={currentWord.word}
         synonyms={currentWord.synonyms} />
        <ErrorPage error={foundError} />
      </div>
    )
}