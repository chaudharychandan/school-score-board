import axios from 'axios';
import { FETCH_STUDENTS, FILTER_STUDENTS, SORT_STUDENTS } from 'actions/types';

const { REACT_APP_API_BASE_URL } = process.env;

export const fetchStudents = () => async dispatch => {
  const { data } = await axios.get(`${REACT_APP_API_BASE_URL}/bins/1dlper`);

  dispatch({
    type: FETCH_STUDENTS,
    payload: data
  });
};

export const filterStudents = text => {
  return {
    type: FILTER_STUDENTS,
    payload: text
  }
};

export const sortStudents = sort => {
  return {
    type: SORT_STUDENTS,
    payload: sort
  }
};