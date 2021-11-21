import axios from 'axios';

import {
  addCategoryRequest,
  addCategorySucces,
  addCategoryError,
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
} from './categories-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());
  try {
    const { data } = await axios.get('/categories')
    console.log(data)
    dispatch(fetchCategoriesSucces(data));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
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
