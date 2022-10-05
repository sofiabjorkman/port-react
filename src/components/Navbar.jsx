import React, { useState } from 'react';
import DownNav from '../components/Dropdown';
import styled from 'styled-components';

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div>
    <BurgerC>
      <BurgerMenu open={open} onClick={() => setOpen(!open)} style={{cursor: "pointer"}}>
        <div/>
        <div/>
        <div/>
      </BurgerMenu>
      <DownNav 
        open={open} setOpen={setOpen} 
      />
    </BurgerC>
     
    </div>
  )
}

export default Navbar

const BurgerC = styled.div`
  width: 100%;
  height: 4rem;
`

const BurgerMenu = styled.div`
  width: 1.2rem;
  height: 1.5rem;
  position: fixed;
  top: 20px;
  z-index: 1;
  right: 40px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 1.5rem;
    height: 0.20rem;
    background-color: ${({ open }) => open ? '#242423' : '#FAFAFA'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`