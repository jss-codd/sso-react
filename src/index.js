import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID,"process.env.CLIENT_ID");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId={"47241042744-5unes2inb4t101cknbgmedcl2psk4j4h.apps.googleusercontent.com"}>
    <App />
    </GoogleOAuthProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
