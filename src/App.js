import './App.css';
import React from 'react'
import {Game} from './features/game/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe React Style with some Pokemon...!
      </header>
      <main>
        <Game />

      </main>
    </div>
  );
}

export default App;
