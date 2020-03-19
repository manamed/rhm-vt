import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import { Auth0Provider } from './contexts/auth0-context';
import './styles/index.css';

const history = createBrowserHistory();
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider onRedirectCallback={onRedirectCallback}>
    <App />
  </Auth0Provider>,

  document.getElementById('root')
);
