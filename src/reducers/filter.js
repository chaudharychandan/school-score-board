import { FILTER_STUDENTS } from 'actions/types';

const INITIAL_STATE = ''

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_STUDENTS:
      return action.payload;
      break;
    default:
      return state;
  }
};
