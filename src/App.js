import React from 'react';
import GlobalStyle from './styles/global'
import {Routes} from './routes'

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}
