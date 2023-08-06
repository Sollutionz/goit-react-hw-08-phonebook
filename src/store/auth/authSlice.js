import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk } from './thunk';

const initialState = {
  access_token: '',
  user: {},
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilledLogOut = state => {
  state.isLoading = false;
  state.user = {};
  state.access_token = '';
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.access_token = payload.token;
  state.user = payload.user;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addCase(logInThunk.fulfilled, handleFulfilled)
      .addMatcher(
        isAnyOf(logInThunk.rejected, logOutThunk.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(logInThunk.pending, logOutThunk.pending),
        handlePending
      );
  },
});

export const authReducer = authSlice.reducer;
