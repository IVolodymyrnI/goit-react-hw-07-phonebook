import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from 'data/contacts.json';
import { checkOnUniqueName } from 'utils';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { db: data },
  reducers: {
    addContact: (state, { payload }) => {
      const isContactExist = checkOnUniqueName({
        array: state,
        value: payload.name,
      });
      payload.id = nanoid();

      isContactExist
        ? alert(`The name ${payload.name} is already exist`)
        : state.unshift(payload);
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Selectors
export const getContacts = state => state.contacts.db;
