import { combineReducers } from 'redux';

import studentsReducer from 'reducers/students';
import filterReducer from 'reducers/filter';
import sortReducer from 'reducers/sort';

export default combineReducers({
  students: studentsReducer,
  filter: filterReducer,
  sort: sortReducer
});
