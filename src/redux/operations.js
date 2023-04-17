import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { checkOnUniqueName } from 'utils';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://643673948205915d34f3ce35.mockapi.io/contacts'
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContacts',
  async (contact, { rejectWithValue }) => {
    const contacts = await axios.get(
      'https://643673948205915d34f3ce35.mockapi.io/contacts'
    );

    const isContactExist = checkOnUniqueName({
      array: contacts.data,
      value: contact.name,
    });

    if (!isContactExist) {
      try {
        const response = await axios.post(
          'https://643673948205915d34f3ce35.mockapi.io/contacts',
          contact
        );
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    } else {
      throw Error('The name of the contact has already saved');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://643673948205915d34f3ce35.mockapi.io/contacts/${id}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
