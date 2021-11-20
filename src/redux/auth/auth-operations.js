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
      const register = async () => {
        const { data } = await axios.post('/auth/register', credentials);
        return data.data.user;
      };

      const user = await register();

      const { data } = await axios.post('/auth/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const login = createAsyncThunk('/auth/login', async credentials => {
  console.log(credentials);
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

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
