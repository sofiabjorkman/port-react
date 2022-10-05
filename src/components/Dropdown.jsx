import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll'

function Dropdown({ open, setOpen }) {
  return (
    <div>
      <MenuContainer open={open}>
        <StyledUl>
          <Link to='landing' onClick={() => setOpen(!open)} smooth={true} duration={1000}>HOME</Link>
          <Link to='about' onClick={() => setOpen(!open)} smooth={true} duration={1000}>ABOUT</Link>
          <Link to='projects' onClick={() => setOpen(!open)} smooth={true} duration={1000}>PROJECTS</Link>
          <Link to='contact' onClick={() => setOpen(!open)} smooth={true} duration={1000}>CONTACT</Link>
        </StyledUl>
      </MenuContainer>
    </div>
  )
}

export default Dropdown

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  height: 17.4rem;
  width: 100%;
  background-color: #F4BE2A;
  color: #292929;
  font-family: 'Libre Franklin', sans-serif;
  transform: ${({ open }) => (open ? 'translatex(0)' : 'translateY(-140%)')};
  transition: transform 0.3s ease-in-out;

  h3 {
    margin-bottom: 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`

