import React from 'react';
import styled from 'styled-components'
//import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GlobalStyle from './styles/global'
//import RegisterUser from './components/RegisterUser'
import Header from './components/Header'
//import Piar from './components/Piar'
import Login from './components/Login'


const FETCH_POSTS_QUERY = gql`
  subscription AppPostsSubscription {
    Post {
      node {
      id
        body
        createdAt
        updatedAt
      }
    }
  }
`

const Layout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

function App() {
  //const { data, loading } = useSubscription(FETCH_POSTS_QUERY)

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
