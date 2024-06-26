import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name ? name : 'Your Name'}</h1>
        <form>
          <label>
            Enter your name:
            <input type="text" value={name} onChange={handleChange} />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
