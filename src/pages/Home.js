import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import { fadeIn} from '../animations';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { upcoming, newGames, popular, searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
          {pathId && <GameDetail />}
        {searched.length ? (
        <div className="searched">
        <h2>Searched Games</h2>
        <Games >
          {searched.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image ? game.background_image : ''}
              />
            );
          })}
        </Games>
        </div>): null}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 3rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
