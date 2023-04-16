import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';
import { apiSlice } from './operations';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: [thunk, apiSlice.middleware],
});

export const persistor = persistStore(store);
