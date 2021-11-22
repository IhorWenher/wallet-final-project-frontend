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
    dispatch(fetchTransactionsSucces(data.data.transactionsData));
  } catch (error) {
    console.log(error)
    dispatch(fetchTransactionsError(error));
  }
};

export const addTransaction =
  (data) => dispatch => {
    dispatch(addTransactionRequest);

    axios
      .post('/transactions', data)
      .then(responce => {
        dispatch(addTransactionSucces(responce.data.data.transactionData))
      })
      .catch(error => dispatch(addTransactionError(error)));
  };
