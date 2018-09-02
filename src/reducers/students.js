import { FETCH_STUDENTS } from 'actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action.payload;
      break;
    default:
      return state;
  }
};
