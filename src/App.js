import './App.css';
import React from 'react'
import {Game} from './features/game/Game'
import { PokeImage } from './features/style/PokeImage';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { TicTacToe } from './features/game/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe React Style with some Pokemon...! 
        <PokeImage />
      </header>
      <main>
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/tictactoe'>Tic-Tac-Toe</Link>
          </nav>
          <Switch>
            <Route exact path='/'>
              <Game />
            </Route>
            <Route path='/tictactoe'>
              <div className="tictactoeGameHolder">
                <TicTacToe />
              </div>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
