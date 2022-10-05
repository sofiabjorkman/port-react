import React from 'react'
import styled from 'styled-components';

function Contact() {
  return (
    <div id='contact'>
        <Container>
          <ContactHeader>
            <h1>Contact Me</h1>
          </ContactHeader>
          <Information>
            <p>Email: sofiabjorkman@outlook</p>
            <p>Phone: 076 231 13 20</p>
          </Information>
        </Container>
    </div>
  )
}

export default Contact

const Container = styled.div`
  height: 100vh;
`
const ContactHeader = styled.div`
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
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  color: #FAFAFA;

  p {
    margin: 10px;
  }
`