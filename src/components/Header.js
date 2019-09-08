import React from 'react'
import styled from 'styled-components'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'

const Logo = styled(Twitter)`
    width: 1.5rem;
    height: 1.5rem;
    color: #2E81E9;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #FFF;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

function Header() {
    return <>
        <Wrapper>
            <Logo />
        </Wrapper>
        </>
}

export default Header