import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from '../../services/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts();
});

export const addContactsThunk = createAsyncThunk('contacts/addContact', data => {
  addContact(data);
  return data
});

export const deleteContactThunk = createAsyncThunk(`contacts/deleteContact`, id => {
  deleteContact(id);
  return id
});
