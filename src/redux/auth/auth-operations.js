import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      const user = data.data.user

      const login = await axios.post('auth/login', user)
      const activeUser = login.data.data.user
      const activeToken = login.data.data.token
      token.set(activeToken)

      const finishedUser = {
        token: activeToken,
        user: activeUser
      }

      return finishedUser

    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const login = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      console.log(data)
      console.log(data.data.token)
      token.set(data.data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.get('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/auth/current');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const operations = {
  register,
  logout,
  login,
  fetchCurrentUser,
};
export default operations;
