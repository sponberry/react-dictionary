import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import VocabularyDisplay from "./VocabularyDisplay";
import SynonymDisplay from "./SynonymDisplay";
import ErrorPage from "./ErrorPage";

import "./dictionary.css";

export default function DictionarySearch(props) {
  let [vocabulary, setVocabulary] = useState(null);
  let [currentWord, setCurrentWord] = useState({ready:false});
  let [rhymes, setRhymes] = useState([]);
  let [foundError, setFoundError] = useState(false);
  let [searchMode, setSearchMode] = useState("definition");

  function handleTyping(event) {
    setVocabulary(event.target.value);};

  // updates current word data & sets foundError to false so both Display/Error children won't appear together
  function getWordData(response) {
      setFoundError(false);
      setCurrentWord({
        ready: true,
        word: response.data,
      });
    };

  function getRhymes(response) {
    setRhymes(response.data);
    };

  // sets background photo via callback function, returns default photo if null
  function getPhoto(response) {
    if (response.data.photos[0]) {
      props.setPhotoData(response.data.photos[0]);
    } else {
      props.setPhotoData(props.dict_img_obj)  
  }};

  function handleSearch(event) {
    event.preventDefault();
    setCurrentWord({ready:false});
    // API call for pexels photo based on vocabulary searched
    let apiKey = process.env.REACT_APP_PEXEL_KEY;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${vocabulary}&per_page=1`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(getPhoto).catch(error => Promise.reject(error));
    // API call for rhyming words based on vocabulary searched
    let museApiUrl = `https://api.datamuse.com/words?rel_rhy=${vocabulary}`
    axios.get(museApiUrl).then(getRhymes).catch(error => Promise.reject(error));;
    // API call for dictionary data based on vocabulary searched
    let dictApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${vocabulary}`;
    setTimeout(() =>
      {axios.get(dictApiUrl)
        .then(function (response) {getWordData(response);})
      .catch(function (error) {
        setFoundError(true);
        return Promise.reject(error);
      })
      .catch(error => Promise.reject(error))
        }, 500
    );};

    // these functions respond to selection in dropdown to set search mode
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
        <form className="form-control form-control-lg rounded-pill" onSubmit={handleSearch}>
        <InputGroup className="border rounded-pill mt-n1">
          <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Search for" id="input-group-dropdown-1">
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
        rhymes={rhymes} 
        />
         <SynonymDisplay
         load={currentWord.ready}
         mode={searchMode}
         word={currentWord.word} 
         />
        <ErrorPage error={foundError} />
      </div>
    )
}