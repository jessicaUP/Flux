import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { setAuthToken } from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})