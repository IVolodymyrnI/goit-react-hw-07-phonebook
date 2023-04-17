import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import data from 'data/contacts.json';
import { addContact, deleteContact, fetchContacts } from './operations';

const pending = state => {
  state.isPending = true;
};

const rejected = (state, action) => {
  state.isPending = false;
  state.error = action.error;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: data,
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: {
    [addContact.pending]: pending,
    [addContact.rejected]: rejected,
    [deleteContact.pending]: pending,
    [deleteContact.rejected]: rejected,
    [fetchContacts.pending]: pending,
    [fetchContacts.rejected]: rejected,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isPending = false;
      state.value.push(payload);
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isPending = false;
      state.value = state.value.filter(contact => contact.id !== payload.id);
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isPending = false;
      state.error = null;
      state.value = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
