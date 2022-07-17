import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Apollo Provider
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
