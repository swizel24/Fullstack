import React from 'react';
import './App.css';
import InsertForm from './InsertForm';
import DisplayData from './DisplayData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InsertForm />
        <DisplayData />
      </header>
    </div>
  );
}

export default App;
