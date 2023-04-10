import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [sumNumber, setSumNumber] = useState();

  useEffect(() => {
    const sum = numbers.reduce((prev, current) => prev + current, 0);
    setSumNumber(sum);
  }, [numbers]);
  
  // function numberSum(){
  //   const sum = numbers.reduce((prev, current) => prev + current);
  //     setSumNumber(sum);
  // };
  
  function del(){
    setNumbers([]);
    setSumNumber();
    setInputValue("");
  }
  return (
    <div className="App">
      <input type="number" value={inputValue} onChange={inputChange} />
      <button onClick={() => { setNumbers([...numbers, Number((inputValue))]) }}>Ekle</button>
      {/* <button onClick={numberSum}>Topla</button> */}
      <p>{numbers.join()}</p>
      <p>{sumNumber}</p>
      <button onClick={del}>Temizle</button>
    </div>
  );
}

export default App;

