import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    gap: 20px;
`
export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
`

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    
`

export const Input = styled.input`
    color: #323941;
    border: 1px solid #D5D8DE;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    height: 60px;
    margin: 5px 0;
    width: 350px;
    &::placeholder{
        padding: 0 10px;
    }
`

export const SectionLogin = styled.div`
    display: grid;
    grid-template-columns: repeat(3 auto);
    gap: 15px;
`;



export const ButtonAccount = styled.a`
    display: flex;
    background:#fff;
    justify-content: center;
    align-items: center;
    color: #FE7E02;
    border-radius:30px;
    font-family: 'Noto Sans Symbols', sans-serif;;
    font-size: 1.125rem;
    font-weight: 700;
    border: 1px solid #FE7E02;
    text-decoration: none;
    width: 350px;
    height: 51px;
`