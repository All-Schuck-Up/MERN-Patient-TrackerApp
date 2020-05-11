import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Redux --Load Patient
export const loadPatient = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/patient/');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
// END --load Patient

// Redux --Register Patient
export const registerPatient = ({ name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
// END --Register Patient

// Redux Login patient
export const loginPatient = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/patient/', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadPatient());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
// END --Login Patient

// Redux --Register Provider
export const registerProvider = ({ name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/provider/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadPatient());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
// End --Register Provider
