import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Route } from 'react-router-dom';

import { loadGames } from './actions/gamesAction';
import Home from './pages/Home';

import GlobalStyles from './components/GlobalStyles';
import GameDetail from './components/GameDetail';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={["game/:id", "/"]}>
        <Home/>
      </Route>
      
    </div>
  );
}

export default App;
