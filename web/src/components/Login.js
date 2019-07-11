import React from 'react'
import styled from 'styled-components'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'

const Wrapper = styled.div`
    padding: 1rem;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 20rem;
    margin-top: 3rem;
    width: 30%;
    align-items: center;
    justify-content: space-evenly;
`;

const Input = styled.input`
    color: rgb(101, 119, 134);
    background-color: #F2F2F2;
    padding: 1rem;
    border: 0;
    border-radius: 3rem;
    width: 80%;
`;

const LoginButton = styled.button`
    color: #FFF;
    background-color: #35D0F2;
    padding: .8rem;
    font-size: .8rem;
    border-radius: 3rem;
    min-width: 10rem;
    border: 0;

    :hover{
        opacity: .8;
        cursor: pointer;
    }
`;

const RegisterLink = styled.span`
    text-decoration: none;
    font-size: .8rem;
    color: #cccd;
    transition: color .3s;

    :hover{
        cursor: pointer;
        color: #35D0F2;
    }
`;

const Logo = styled(Twitter)`
    width: 4rem;
    height: 4rem;
    color: #34D3FD;
`;

function Login() {
    return <>
        <Wrapper>
            <Logo />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password"/>
            <LoginButton>Login</LoginButton>
            <RegisterLink>Cadastre-se</RegisterLink>
        </Wrapper>
    </>
}

export default Login