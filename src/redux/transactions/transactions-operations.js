import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSucces,
  addTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSucces,
  fetchTransactionsError,
} from './transactions-actions';

axios.defaults.baseURL = '';

const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest);
  try {
    dispatch(fetchTransactionsSucces);
  } catch (error) {
    dispatch(fetchTransactionsError);
  }
};

const addTransaction = (type, date, category, sum, comment) => dispatch => {
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

export default {
  fetchTransactions,
  addTransaction
}
