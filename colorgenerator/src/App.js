import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  useEffect(() => {
    let array=[];
    for (let i = 0; i < inputValue; i++) {
      array.push(randomrgb())
    }
    setColors(array)
  },[inputValue]);

  function randomrgb(){
    var r= random();
    var g= random();
    var b= random();
    var colour= rgb(r, g, b);
    return colour
}
  function random(){
    var random= Math.floor(Math.random() * 255) + 0;
    return random
}
  function rgb(a, b, c) {
    var abc= "rgb(" + a + ", " + b + ",  "+ c +" )"
    return abc
}
  return (
    <div className='App'>
      <input type="number" value={inputValue} onChange={inputChange} />
      {colors.map((colour) => (
        <div className="container" style={{ backgroundColor: colour }}>
          {colour}
        </div>
      ))}
    </div>
  )
}

export default App