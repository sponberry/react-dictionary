import React, { useState } from "react";
import "./dictionary.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import VocabularyDisplay from "./VocabularyDisplay";

export default function DictionarySearch() {
  let [vocabulary, setVocabulary] = useState(null);
  let [currentWord, setCurrentWord] = useState({ready:false});
  let [rhymes, setRhymes] = useState([]);

  function handleTyping(event) {
    setVocabulary(event.target.value);
  }

  function getWordData(response) {
    if (response.status !== 200) {
      console.log("An error occurred");
      setVocabulary(null);
    } else {
      setCurrentWord({
        ready: true,
        word: response.data[0].word,
        pronunciation: response.data[0].phonetics[0],
        definitionsArray: response.data[0].meanings,
        synonyms: response.data[0].meanings[0].definitions[0].synonyms,
      });
    }
  }

  function getRhymes(response) {
    if (response.status !== 200) {
      alert("An error occurred");
      setVocabulary(null);
    } else {
      setRhymes(response.data);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    setCurrentWord({ready:false});
    let dictApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${vocabulary}`;
    let museApiUrl = `https://api.datamuse.com/words?rel_rhy=${vocabulary}`
    axios.get(museApiUrl).then(getRhymes);
    setTimeout(() =>
      {axios.get(dictApiUrl).then(getWordData)},
      500
    );
  }
  
    return (
      <div className="dictionary">
        <h1>What's the word?</h1>
        <div className="spacer-twenty"></div>
        <form className="form-control input-group input-group-lg" onSubmit={handleSearch}>
        <InputGroup className=" border rounded-pill">

          <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Definition</Dropdown.Item>
            <Dropdown.Item href="#">Synonyms</Dropdown.Item>
          </DropdownButton>
          <input type="search" className="form-control mx-2" placeholder="type a word..." onChange={handleTyping}/>
          <input type="submit" className="btn btn-outline-secondary mb-1" value="🔍"/>
          </InputGroup>
        </form>
        <VocabularyDisplay 
        load={currentWord.ready}
        word={currentWord.word}
        pronunciation={currentWord.pronunciation}
        definitionsArray={currentWord.definitionsArray}
        synonyms={currentWord.synonyms}
        rhymes={rhymes}
         />
      </div>
    )
}