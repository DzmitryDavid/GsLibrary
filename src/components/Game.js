import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import {popup} from '../animations';
import { loadDetail } from '../actions/detailAction';

const Game = ({ name, id, image, released }) => {

  const dispatch = useDispatch();

  const gameDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup} initial="hidden" animate="show" 
      onClick={gameDetailHandler}>
      <Link to={`/game/${id}`}>
      <motion.h3>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export default Game;
