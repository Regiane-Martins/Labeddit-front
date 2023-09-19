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

export const Logo = styled.img`
`

export const Title = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const Input = styled.input`
    color: #323941;
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
`

export const Line = styled.hr`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: 1px;
    border: 0;
    width: 350px;

`

export const ButtonAccount = styled.a`
    display: flex;
    background:#fff;
    justify-content: center;
    align-items: center;
    color: #FE7E02;
    border-radius:30px;
    /* padding: 10px; */
    font-family: 'Noto Sans Symbols', sans-serif;;
    font-size: 1.125rem;
    font-weight: 700;
    border: 1px solid #FE7E02;
    text-decoration: none;
    cursor: pointer;
    width: 350px;
    height: 51px;
`