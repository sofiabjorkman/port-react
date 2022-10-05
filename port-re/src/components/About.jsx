import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import mountain from '../img/bwsb.jpg';
import forest from '../img/for.JPG';

function About() {
  return (
    <div id='about'>
      <section>
        <Container>
          <LandingText>
            <h1>Who Am I</h1>
          </LandingText>
          <TextContainer>
            <Skills>
              <h3>Skill</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React | Nextjs</p>
              <p>Typescript</p>
              <p>Headless CMS</p>
            </Skills>
            <TextC>
              <p>My name is Sofia & I am a newly graduated Frontend Developer.
              I am an outgoing person who likes to learn new things and develop in programming. I also have an interest in UX/UI design & some experience from school and my internship. Some hobbies besides coding are painting, photography and spending time with family and friends.</p>
            </TextC>
          </TextContainer>
          <ImgMe>
            <Image 
              src={forest} 
              alt='me' 
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{left: 0, right: 50, top: 0, bottom: 60}} 
              initial={{opacity: 0, y: -100}}
              animate={{opacity: 1, y: 0, transition: { duration: 1}}}
            />
            <Image 
              src={mountain} 
              alt='me' 
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{left: 50, right: 0, top: 0, bottom: 50}} 
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0, transition: { duration: 1}}}
            />
          </ImgMe>
        </Container>
      </section>
    </div>
  )
}

export default About

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`
const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F4BE2A;
  width: 100%;
  padding: 40px 0;

  h1 {
    font-size: 40px;
    color: #242423;
    font-family: 'Montserrat', sans-serif;
  }
`
const TextContainer = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const Skills = styled.div`
  color: #FAFAFA;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5rem;
  margin: 0px 60px;

  @media screen and (max-width: 768px) {
    margin: 20px 10px;
  }
`
const TextC = styled.div`
  max-width: 600px;
  color: #FAFAFA;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5rem;
  margin: 0px 60px;

  @media screen and (max-width: 768px) {
    margin: 20px 10px;
  }
`
const Image = styled(motion.img)`
  display: block;
  width: 180px;
  height: auto;
  border-radius: 50%;
  position: absolute;
`
const ImgMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  img:nth-child(1) {
    bottom: -340px;
    left: 20px;

    @media screen and (max-width: 768px) {
    display: none;
  }
  }
  img:nth-child(2) {
    top: 80px;
    right: 20px;
  }
`