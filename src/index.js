import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';



const client = new ApolloClient({
  uri: 'https://x3tq8ji6t2.execute-api.ap-south-1.amazonaws.com/dev/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache()
});


console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID,"process.env.CLIENT_ID");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
  <GoogleOAuthProvider clientId={"867855888239-p7pudftg01nctvjcicivc3cbgch042pg.apps.googleusercontent.com"}>
    <App />
    </GoogleOAuthProvider>
    </ApolloProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
