import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.value;

export const selectError = state => state.contacts.error;

export const selectIsPending = state => state.contacts.isPending;

export const selectFilter = state => state.filter;

export const selectVisiableContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
