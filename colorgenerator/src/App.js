import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [colors, setColors] = useState([]);

  function randomrgb() {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    let colour = rgb(r, g, b);
    setColors([...colors, colour]);
  }
  function randomNumber() {
    let random = Math.floor(Math.random() * 255) + 0;
    return random
  }
  function rgb(a, b, c) {
    let colour = "rgb(" + a + ", " + b + ",  " + c + " )";
    return colour
  }

  return (
    <div className="App">
      <button onClick={() => {
        randomrgb()
      }}>Color Generator</button>
      {colors.map((color) =>
        <div className="container" style={{backgroundColor:color}} > {color} </div>)}
    </div>
  );
}

export default App;
