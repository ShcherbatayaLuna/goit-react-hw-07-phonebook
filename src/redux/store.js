import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './createSlice/ContactsSlice';

export const store = configureStore({
  reducer: contactsReducer,
});
