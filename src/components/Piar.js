import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: #FFF;
    border: 1px solid #ccc;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Input = styled.input`
    color: rgb(101, 119, 134);
    background-color: #F2F2F2;
    padding: .8rem;
    border: 0;
    border-radius: 3rem;
    width: 80%;
    transition: width .3s;
    align-self: flex-start;
`;

const PiuButton = styled.button`
    color: #FFF;
    background-color: #35D0F2;
    padding: .8rem;
    border-radius: 3rem;
    min-width: 5rem;
    border: 0;

    :hover{
        opacity: .8;
        cursor: pointer;
    }
`;


function Piar() {
    return <>
        <Wrapper>
            <Input type='text' placeholder='O que está acontecendo?' />
            <PiuButton>Piu</PiuButton>
        </Wrapper>
    </>
}

export default Piar