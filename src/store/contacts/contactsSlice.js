import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactsThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  console.log(payload);
  state.items = [...payload];
  state.error = '';
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, payload];
  state.error = '';
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(el => el.id !== payload)
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    logOutReduxItems: (state) => {
      state.items = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAllOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAllOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactThunk
        ),
        handlePending
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {logOutReduxItems} = contactsSlice.actions
