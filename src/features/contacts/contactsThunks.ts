import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContacts, Contact, ContactMutation} from '../../types';
import axiosApi from '../../axiosApi';

export const createContact = createAsyncThunk<void, ContactMutation>(
  'contacts/create',
  async (apiContact) => {
    await axiosApi.post('/contacts.json', apiContact);
  },
);

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetch',
  async () => {
    const {data: contacts} = await axiosApi.get<ApiContacts | null>('/contacts.json');
    if (contacts === null) {
      return [];
    }
    return Object.keys(contacts).map((id) => ({
      ...contacts[id],
      id,
    }));
  }
);