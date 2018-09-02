import { SORT_STUDENTS } from 'actions/types';

const INITIAL_STATE = {
  type: '',
  order: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SORT_STUDENTS:
      return action.payload;
      break;
    default:
      return state;
  }
};
