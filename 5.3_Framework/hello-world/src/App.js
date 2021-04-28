import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  
  const increment = () => setCounterValue(counterValue + 1);
  const decrement = () => setCounterValue(counterValue - 1);

  return (
    <div className="App">
      <button onClick={decrement}>-1</button>
      <p>{counterValue}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default App;
