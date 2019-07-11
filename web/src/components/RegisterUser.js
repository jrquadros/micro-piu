import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'

const Wrapper = styled.div`
    padding: 5rem;
    width: 50rem;
    margin: auto;
    background-color: #FFF;
    margin-top: 5rem;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    border-radius: 5px;
`

const Input = styled.input`
    padding: .5rem;
    font-size: 1rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #ccc;

    :focus{
        border-bottom-color: #34D3FD;
    }
`;

const Button = styled.button`
    color: #FFF;
    background-color: #34D3FD;
    border-radius: 30px;
    padding: 1rem;
    border: none;
    width: 10rem;
    font-weight: 600;
    letter-spacing: 2px;
    transition: opacity .2s;

    :hover{
        cursor: pointer;
        opacity: .8;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    justify-content: space-around;
    align-items: center;
    height: 12rem;
`;

const Logo = styled(Twitter)`
    width: 4rem;
    height: 4rem;
    color: #34D3FD;
`;

const USER_MUTATION = gql`
    mutation CreateUser($username: String!){
        createUser(name: $username){
            name
        }
    }
`;

function RegisterUser() {
    const [username, setUsername] = useState("");

    const handleChange = (_event) => setUsername(_event.target.value);
    
    const [createUser] = useMutation(USER_MUTATION, {
        variables: {
            username: username
        }
    })

    return (
        <Wrapper>
            <FormWrapper>
                <Logo />
                <Input placeholder="username"
                    onChange={(e) => handleChange(e)}
                />
                <Button onClick={() => createUser()}>Register</Button>
            </FormWrapper>
        </Wrapper>)
}

export default RegisterUser