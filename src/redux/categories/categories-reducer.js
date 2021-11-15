import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
  addCategoryRequest,
  addCategorySucces,
  addCategoryError,
} from './categories-actions';


const items = createReducer([], {
  [fetchCategoriesSucces]: (_, { payload }) => payload,
  [addCategorySucces]: (state, {payload})=>[...state, payload]
})

const loading = createReducer(false, {
  [fetchCategoriesRequest]: () => true,
  [fetchCategoriesSucces]: () => false,
  [fetchCategoriesError]: () => false,
  [addCategoryRequest]: () => true,
  [addCategorySucces]: () => false,
  [addCategoryError]: ()=>false
})

const error = createReducer(null, {
  [fetchCategoriesError]: (_, { payload }) => payload,
  [addCategoryError]: (_, { payload }) => payload,
  [fetchCategoriesRequest]: () => null,
  [addCategoryRequest]: ()=>null
})

export default combineReducers({
  items,
  loading,
  error,
});