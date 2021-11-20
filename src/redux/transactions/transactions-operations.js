import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSucces,
  // addTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSucces,
  fetchTransactionsError,
} from './transactions-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU2MTY4YTgwZjc0ZGQ1MDJmMWI2NCIsImlhdCI6MTYzNzE3OTc2Nn0.NQTOwaBoglxcdu0RKYbTLsy80Jjm9qLA8gk-e82WDvg';

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
  (data) => dispatch => {

    dispatch(addTransactionRequest);
    dispatch(addTransactionSucces(data))

    // axios
    //   .post('/transactions', transaction)
    //   .then(({ data }) => dispatch(addTransactionSucces(data)))
    //   .catch(error => dispatch(addTransactionError(error)));
  };
