require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';
// Importing apollo dependencies
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';

// create httpLink to connect apollo client with graphql api (simple api endpoint)
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjbdopkq71a8w0104xwmi6qy3' })

// initiate apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('app')
);
