import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good
        // Update state to indicate user auth
        // Save JWT
        // redirect to route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad
        // Show an error
      });
  }
}