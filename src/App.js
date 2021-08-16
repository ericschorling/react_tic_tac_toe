import './App.css';
import React from 'react'
import {Game} from './features/game/Game'
import { PokeImage } from './features/style/PokeImage';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe React Style with some Pokemon...! <PokeImage />
      </header>
      <main>
        
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/tictactoe'>Tic Tac Toe</Link>
        </Router>
        <Switch>
          <Route exact path='/'>
            <Game />
          </Route>
          <Route path='/tictactoe'>
            <div>
              <h1>Coming Soon</h1>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
