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
    align-content: space-around;
    border-radius: 5px;
`

const Input = styled.input`
    padding: .5rem;
    font-size: 1rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 80%;
    transition: width .3s;

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
    height: 20rem;
`;

const Logo = styled(Twitter)`
    width: 4rem;
    height: 4rem;
    color: #34D3FD;
`;

const USER_MUTATION = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!){
        createUser(
        	authProvider:{
          	email:{
            	email: $email
              password: $password
          	}
        	}
          name: $username
        ){
          name
        }
    }
`;

function RegisterUser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [createUser] = useMutation(USER_MUTATION, {
        variables: {
            username: username,
            email: email,
            password: pass
        }
    })

    return (
        <Wrapper>
            <FormWrapper>
                <Logo />
                <Input placeholder="Email"
                    type="email"
                    onChange={(_event) => setEmail(_event.target.value)}
                />

                <Input placeholder="Password"
                    type="password"
                    onChange={(_event) => setPass(_event.target.value)}
                />

                <Input placeholder="Name"
                    type="text"
                    onChange={(_event) => setUsername(_event.target.value)}
                />
                <Button onClick={() => createUser()}>Register</Button>
            </FormWrapper>
        </Wrapper >)
}

export default RegisterUser