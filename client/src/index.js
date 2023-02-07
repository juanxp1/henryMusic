import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './Store/store';
//estilos de audio
import "@madzadev/audio-player/dist/index.css";


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Auth0Provider
        domain="dev-183wwf4clw7n6848.us.auth0.com"
        clientId="av3cM1zeJYnKSe8DhGlCtpmE7t05KMFY"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />

      </Auth0Provider>

    </Provider>

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
