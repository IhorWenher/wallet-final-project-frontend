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
    const array = data.data.transactionsData

    const categories = {
      income: 0,
      spending: 0
    }
    // const transArray = []
    array.forEach((item) => {
      const name = item.category
      const sum = item.sum
      const type = item.type

      if (type) {
        categories.income += sum
        return
      }

      if (!type) {
        categories.spending += sum
      }

      categories[name] = categories[name] === undefined ? sum : categories[name] + sum
    })
    
    const keys = Object.keys(categories)
    const sortedArray = keys.map((item) => {
      return {
        name: item,
        summ: categories[item]
      }
    })

    dispatch(fetchCategoriesSucces(sortedArray));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export default {
  fetchCategories,
};
