import {createAsyncThunk} from '@reduxjs/toolkit';
import {ContactMutation} from '../../types';
import axiosApi from '../../axiosApi';

export const createContact = createAsyncThunk<void, ContactMutation>(
  'contacts/create',
  async (apiContact) => {
    await axiosApi.post('/contacts.json', apiContact);
  },
);