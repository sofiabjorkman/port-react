import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Landing() {

  const fadeTop = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  }
  const fadeFd = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div id='landing'>
      <Container>
      <InnerC>
      <LandingText>
          <motion.h1
            variants={fadeTop}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >Sofia Björkman</motion.h1>
          <motion.h3
            variants={fadeFd}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >Frontend Developer</motion.h3>
          <Link to='projects' smooth={true} duration={1000}>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, backgroundColor: 'rgb(53,106,70)' }}
            >See my work</Button>
          </Link>
        </LandingText>
      </InnerC>
      </Container>
    </div>
  )
}

export default Landing

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const InnerC = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #F4BE2A;
  width: 100%;
  padding: 28px 0;
`
const LandingText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 40px;
    color: #242423;
    font-family: 'Montserrat', sans-serif;

      @media screen and (min-width: 1024px) {
        font-size: 60px;
      }
  }
  h3 {
    font-size: 26px;
    color: #FAFAFA;
    font-family: 'Montserrat', sans-serif;

      @media screen and (min-width: 1024px) {
        font-size: 40px;
      }
  }
`
const Button = styled(motion.button)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: 'Montserrat', sans-serif;
  width: 10rem;
  height: 2.6rem;
  margin-top: 20px;
  background-color: transparent;
  color: #242423;
  border: 2px solid #242423;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer
`