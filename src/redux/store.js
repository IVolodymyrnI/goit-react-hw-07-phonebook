import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
