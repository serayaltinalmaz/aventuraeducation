import React from 'react'
import { useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import copyanimation from "./Lottie/copyanimation.json"
import { factory } from 'typescript';

const App = () => {
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState<string>("");
  const inputChange = (event:any) => {
    setInputValue(event.target.value);
  };

    const rgb = () => {
    var r= Math.floor(Math.random() * 255) + 0;
    var g= Math.floor(Math.random() * 255) + 0;
    var b= Math.floor(Math.random() * 255) + 0;
    var color= "rgb(" + r + ", " + g + ",  "+ b +" )"
    return color
}

  const generate = () => {
    let array:any=[];
    for (let i = 0; i < Number(inputValue); i++) {
      array.push(rgb())
    }
    setColors(array)
  }

  const [copied, setCopied] = useState<string>();

  const copiedColour = (colour:string) => {
    navigator.clipboard.writeText(colour)
      .then(() => {
        console.log(colour);
        setCopied(colour);
      })
  };

  return (
  <div className='App'>
      <input type="number" value={inputValue} onChange={inputChange} />
      <button className='generateButton' onClick={generate}>Renk Üret</button>
      <div className='containers'>
        {colors.map((colour) => (
          <div className="container" style={{ backgroundColor: colour }}>
            {colour} 
            <button className='generateButton' onClick={() => copiedColour(colour)}>
            Kopyala
            </button>
            
            {copied == colour && <Lottie
              animationData={copyanimation}
              loop = {false}
              style={{ width: 130, height: 130 }}
            />}
        </div>
      ))}
    </div>
  </div>
);
}
export default App

//{copied === colour ? <p>Kopyalandı!</p> : null}