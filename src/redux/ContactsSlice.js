import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      const nameFilter = state.contacts.find(
        event => event.name.toLowerCase() === payload.name.toLowerCase()
      );
      nameFilter
        ? alert('This contact is already in list')
        : state.contacts.push(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
