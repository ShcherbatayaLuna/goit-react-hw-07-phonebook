import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/utils/ContactsApi';

const onPending = state => {
  state.contacts.isLoading = true;
};

const onRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.rejected]: onRejected,

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
      state.contacts.items.sort((a, b) => (a.name > b.name ? 1 : -1));
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [payload, ...state.contacts.items];
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== payload.id
      );
    },
  },
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
