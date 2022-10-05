import React, { useState } from 'react'
import styled from 'styled-components';
import pic from '../img/lev-app1.jpg'
import pic2 from '../img/lev-app2.jpg'
import mov1 from '../img/movie-app.jpg'
import mov2 from '../img/movie-app1.jpg'
import todo1 from '../img/todo-list.jpg'
import todo2 from '../img/todo-list1.jpg'

function Projects() {

  const [hov1, setHov1] = useState(false);
  const [hov2, setHov2] = useState(false);
  const [hov3, setHov3] = useState(false);

  return (
    <div id='projects'>
      <Container>
        <LandingText>
          <h1>Projects</h1>
        </LandingText>
        <ProjectC>
          <div 
          onMouseOver={() => setHov1(true)}
          onMouseOut={() => setHov1(false)}>
            <img src={hov1 ? pic2 : pic} alt='' />
          </div>
          <div 
          onMouseOver={() => setHov2(true)}
          onMouseOut={() => setHov2(false)}>
            <img src={hov2 ? mov1 : mov2} alt='' />
          </div>
          <div 
          onMouseOver={() => setHov3(true)}
          onMouseOut={() => setHov3(false)}>
            <img src={hov3 ? todo2 : todo1} alt='' />
          </div>
        </ProjectC>
      </Container>
    </div>
  )
}

export default Projects

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
const ProjectC = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  /* max-width: 100%;
    height: auto;
    display: block; */

  img {
    width: 140px;
    height: auto;
    border-radius: 8px;
    margin: 15px;
    /* width: 100%;
    height: auto;
    max-width: 40vw; */

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
  }
`