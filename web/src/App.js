import React from 'react';
//import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GlobalStyle from './styles/global'
//import RegisterUser from './components/RegisterUser'
import Header from './components/Header'
import Piar from './components/Piar'

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

function App() {
  //const { data, loading } = useSubscription(FETCH_POSTS_QUERY)

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Piar />
    </div>
  );
}

export default App;
