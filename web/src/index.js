import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './services/apolloClient'

ReactDOM.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ), 
  document.getElementById('root')
);
