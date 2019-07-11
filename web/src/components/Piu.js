import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #FFF;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: .5rem 3rem;
    box-sizing: border-box;
`;

const Info = styled.div`
    flex: 1;
    span{
        font-size: .8rem;
        color: #ccc;
    }
`;

const Content = styled.div`
    flex: 2;
    font-size: 1rem;
`;

function Piu(props){
    return <><Wrapper>
        <Info>
            <span>{props.username || 'username'}</span>
            <br />
            <span>{props.createdAt || 'CreatedAt: date'}</span>
        </Info>
        <Content>
            <p>{props.content || 'lorem ipsum lorem lorem ipsum lorem!!!'}</p>
        </Content>
        </Wrapper></>
}

export default Piu