import axios from 'axios';

// function from documentation to search for tokens when called
// onSucces: post token to localstorage
// onFail: remove any token that exsists
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
