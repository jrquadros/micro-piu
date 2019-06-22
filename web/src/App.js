import React from 'react';
import {useSubscription} from '@apollo/react-hooks'
import gql from 'graphql-tag'

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
  const { data, loading } = useSubscription(FETCH_POSTS_QUERY)

  return (
    <div className="App">
      micro piu
      <p>{loading ? 'Carregando...' : 'Posts' }</p>
    </div>
  );
}

export default App;
