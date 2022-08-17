import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  
  const [count,setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="plus-button"
            onClick={(count) => setCount((count) => count + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="minus-button"
            onClick={(count) => setCount((count) => count - 1)}
          >
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;