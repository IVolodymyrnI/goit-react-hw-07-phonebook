import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from 'data/contacts.json';
import { checkOnUniqueName } from 'utils';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: data },
  reducers: {
    addContact: (state, { payload }) => {
      const isContactExist = checkOnUniqueName({
        array: state.value,
        value: payload.name,
      });
      payload.id = nanoid();

      isContactExist
        ? alert(`The name ${payload.name} is already exist`)
        : state.value.unshift(payload);
    },
    deleteContact: (state, { payload }) => {
      return {
        value: state.value.filter(contact => contact.id !== payload.id),
      };
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
export const getContacts = state => state.contacts.value;
