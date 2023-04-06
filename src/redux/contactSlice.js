import { createSlice } from '@reduxjs/toolkit';
import data from 'data/contacts.json';
import { nanoid } from 'nanoid';
import { checkOnUniqueName, load } from 'utils';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: load('contacts') ?? data,
  reducers: {
    addContact: (state, { payload }) => {
      const isContactExist = checkOnUniqueName({
        array: state,
        value: payload.name,
      });

      const updatedValue = { ...payload, id: nanoid() };

      if (isContactExist) {
        return [updatedValue, ...state];
      } else {
        alert(`The name ${payload.name} is already exist`);
        return state;
      }
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;