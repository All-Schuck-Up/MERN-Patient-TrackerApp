import {
  GET_PROFILE,
  PROFILE_ERROR,
  SYMPTOM_ENTRY,
  ENTRY_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case SYMPTOM_ENTRY:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
    case ENTRY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
