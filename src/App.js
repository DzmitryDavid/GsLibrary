import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { loadGames } from './actions/gamesAction';

import Home from './pages/Home'


function App() {
 
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
