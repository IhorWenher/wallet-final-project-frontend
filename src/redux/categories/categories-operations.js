import axios from 'axios';

import {
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
} from './categories-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());
  try {
    const { data } = await axios.get('/transactions');

    console.log(data.data);

    dispatch(fetchCategoriesSucces(data));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export default {
  fetchCategories,
};
