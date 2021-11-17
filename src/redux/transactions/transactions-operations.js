import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSucces,
  addTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSucces,
  fetchTransactionsError,
} from './transactions-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
    dispatch(fetchTransactionsSucces(data));
  } catch (error) {
    dispatch(fetchTransactionsError(error));
  }
};

export const addTransaction =
  (type, date, category, sum, comment) => dispatch => {
    const transaction = {
      type,
      date,
      category,
      sum,
      comment,
    };
    dispatch(addTransactionRequest);

    axios
      .post('/transactions', transaction)
      .then(({ data }) => dispatch(addTransactionSucces(data)))
      .catch(error => dispatch(addTransactionError(error)));
  };
