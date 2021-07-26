import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { loadDetail } from '../actions/detailAction';

const Game = ({name, id, image, released}) => {
  const dispatch = useDispatch();

  const gameDetailHandler = () => {
    dispatch(loadDetail(id))   
  }

  return (
    <StyledGame onClick={gameDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  img { 
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
