import React, { useState } from "react";
import DictionarySearch from "./DictionarySearch";
import './App.css';



function App() {
  let [bgImage, setBgImage] = useState({photographer: "Snapwire", src: {large2x:"https://images.pexels.com/photos/6997/books-writing-reading-sonja-langford.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}})

  const styles = {
    backgroundImage: 'url('+bgImage.src.large2x+')',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200vh",
    opacity: 0.8,
  }

  return (
    <div className="App container-fluid" style={styles}>
        <header className="App-header">
          Image credit: {bgImage.photographer}
        </header>
        <DictionarySearch setPhotoData={(value) => {
          setBgImage(value);
        }}/>
    </div>
  );
}

export default App;
