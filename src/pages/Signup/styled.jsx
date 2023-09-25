import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2.0625rem;
    font-weight: 700;
    padding: 13px;
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
`

export const Form = styled.form`
    display: grid;
    gap: 10px;
`

export const Input = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 5px;
    height: 60px;
    width: 350px;
    &::placeholder{
        font-family: 'Noto Sans'sans-serif;
        font-size:1rem;
        font-weight: 400;
        padding: 0 10px;
    }
`

export const SubTitle = styled.p`
    font-family: 'Noto Sans';
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.3;
`

export const Link = styled.a`
    color: #4088CB;
    text-decoration: none;
`

export const Newsletter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const IconNewsletter = styled.img`
    margin-right: 10px; 
`

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
`;

export const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: ${typingAnimation} 2s steps(30, end) 1s forwards;
`;

