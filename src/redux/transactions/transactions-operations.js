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
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg1ODFlMTk0MWE0NGM0YzNiODdjNyIsImlhdCI6MTYzNzM3NDAxNn0.IoESZ4hXfQbOchCD_I43ROeNGjlOZ5ISNxgQNaGH-lU';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
    console.log(data)
    dispatch(fetchTransactionsSucces(data.data.transactionsData));
  } catch (error) {
    console.log(error)
    dispatch(fetchTransactionsError(error));
  }
};

export const addTransaction =
  (data) => dispatch => {

    // dispatch(addTransactionRequest);
    // dispatch(addTransactionSucces(data))

    axios
      .post('/transactions', data)
      .then(({ data }) => dispatch(addTransactionSucces(data)))
      .catch(error => dispatch(addTransactionError(error)));
  };
