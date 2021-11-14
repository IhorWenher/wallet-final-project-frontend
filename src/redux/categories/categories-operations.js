import axios from 'axios';

import {
  addCategoryRequest,
  addCategorySucces,
  addCategoryError,
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
} from './categories-actions';

axios.defaults.baseURL = '';

const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest);
  try {
    dispatch(fetchCategoriesSucces);
  } catch (error) {
    dispatch(fetchCategoriesError);
  }
};

const addCategory = name => dispatch => {
  const category = {
    name,
  };
  dispatch(addCategoryRequest);
  axios
    .post('./categories', category)
    .then(({ data }) => dispatch(addCategorySucces(data)))
    .catch(error => dispatch(addCategoryError(error)));
};

export default {
  fetchCategories,
  addCategory
}
