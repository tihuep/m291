import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  const [displayValue, setDisplayValue] = useState('');


  const updateDisplayValue = (newCharacter: string): void => {
    if (newCharacter === "="){
      setDisplayValue(eval(displayValue));
    }else{
      setDisplayValue(`${displayValue}${newCharacter}`);
    }
  }

  return (
    <div className="App">
      <Display value={displayValue}/>
      <Keypad keypadPress={updateDisplayValue}/>
    </div>
  );
}

export default App;