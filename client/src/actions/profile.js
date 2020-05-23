import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  SYMPTOM_ENTRY,
  ENTRY_ERROR,
} from './types';
import { Redirect } from 'react-router-dom';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/patients/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add new patient symptom entry to profile
export const addSymptomEntry = ({
  date,
  symptom1,
  symptom2,
  symptom3,
  symptom4,
  temp,
  comment,
  immediateAttention,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    date,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    temp,
    comment,
    immediateAttention,
  });

  try {
    const res = await axios.put('/patients/profile/newEntry', body, config);

    dispatch({
      type: SYMPTOM_ENTRY,
      payload: res.data,
    });
    // history.push('/patient/:id/profile');
  } catch (err) {
    dispatch({
      type: ENTRY_ERROR,
      payload: {
        msg: 'Error with profile/action',
      },
    });
  }
};
