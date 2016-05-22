import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types'

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good
        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER});
        // Save JWT
        localStorage.setItem('token', response.data.token);
        // redirect to route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad
        // Show an error
      });
  }
}