import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export function LoginPage() {
    return <>
        <Header />
        <Wrapper>
            <Login />
        </Wrapper>
    </>
}
