import React, { useState } from "react";
import DictionarySearch from "./DictionarySearch";
import './App.css';


function App() {
  const dict_img_obj = {photographer: "Snapwire", src: {large2x:"https://images.pexels.com/photos/6997/books-writing-reading-sonja-langford.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}};
  let [bgImage, setBgImage] = useState(dict_img_obj);

  const link = "https://github.com/sponberry/react-dictionary"
  const styles = {
    backgroundImage: 'url('+bgImage.src.large2x+')',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200vh",
    opacity: 0.75,
  }

  return (
    <div className="App container-fluid" style={styles}>
        <header className="App-header flex-wrap d-flex">
          Image credit: <br />
          {bgImage.photographer}
        </header>
        <header className="code-link row">
            <div className="col-sm-6 mr-n2 icon">
            <a href={link} target="_blank" rel="noreferrer">👩🏻‍💻</a>
            </div>
            <div className="col-sm-6 ml-n2 d-none d-sm-block">
              <p className="p-header"><a href={link} target="_blank" rel="noreferrer">Code by Abi</a></p>
            </div>
        </header>
        <DictionarySearch dict_img_obj={dict_img_obj} setPhotoData={(value) => {
          setBgImage(value);
        }}/>
    </div>
  );
}

export default App;
