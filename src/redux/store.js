import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currencyReducers from "./currency/currencyReducers";

const walletReducer = combineReducers({
  currency: currencyReducers
});

const store = configureStore({
  reducer: {
    walletReducer
  }
});

export default store;