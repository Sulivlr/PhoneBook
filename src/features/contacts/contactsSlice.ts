import {createSlice} from '@reduxjs/toolkit';
import {createContact, deleteContact, fetchContacts} from './contactsThunks';
import {Contact} from '../../types';

export interface ContactsState {
  items: Contact[]
  isCreating: boolean,
  isRemoving: string | null,
  isFetching: boolean,
}

export const initialState: ContactsState = {
  items: [],
  isCreating: false,
  isRemoving: null,
  isFetching: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.isCreating = true;
    }).addCase(createContact.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createContact.rejected, (state) => {
      state.isCreating = false;
    });

    builder.addCase(fetchContacts.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchContacts.fulfilled, (state,{payload: contacts}) => {
      state.isFetching = false;
      state.items = contacts;
    }).addCase(fetchContacts.rejected, (state) => {
      state.isFetching = false;
    });

    builder.addCase(deleteContact.pending, (state,{meta: {arg: id}}) => {
      state.isRemoving = id;
    }).addCase(deleteContact.fulfilled, (state) => {
      state.isRemoving = null;
    }).addCase(deleteContact.rejected, (state) => {
      state.isRemoving = null;
    });
  },
  selectors: {
    selectContactIsCreating: (state) => state.isCreating,
    selectContactIsFetching: (state) => state.isFetching,
    selectContacts: (state) => state.items,
    selectContactIsRemoving: (state) => state.isRemoving,
  }
});

export const contactReducer = contactsSlice.reducer;
export const {
  selectContactIsCreating,
  selectContactIsFetching,
  selectContacts,
  selectContactIsRemoving,
} = contactsSlice.selectors;