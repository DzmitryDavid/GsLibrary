import React, {useState} from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import {fadeIn} from '../animations'
import logo from '../img/logo.svg';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    const text = e.target.value
    setTextInput(text)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }
  const clearSearchHandler = () => {
    dispatch({
      type: 'CLEAR_SEARCHED'
    })
  }
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate="show">
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="logo" />
        <h1>iGnite</h1>
      </Logo>
      <form className="search">
        <input 
          value={textInput}
          type="text" 
          onChange={(e) => inputHandler(e)}/>
        <button
          onClick={submitSearch}
          type="submit">Search</button>
      </form>
    </StyledNav>
  )
}
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: .5rem;
    border: none;
    font-weight: bold;
    box-shadow: 0 0 30px rgba(0,0,0, .2);

  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color:#fff;
    
  }
  img {
    height: 2rem;
    width: 2rem;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
