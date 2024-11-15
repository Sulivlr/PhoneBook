import {createSlice} from '@reduxjs/toolkit';
import {createContact} from './contactsThunks';

export interface ContactsState {
  isCreating: boolean,
  isDeleting: boolean,
  isFetching: boolean,
}

export const initialState: ContactsState = {
  isCreating: false,
  isDeleting: false,
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
  },
  selectors: {
    selectContactIsCreating: (state) => state.isCreating,
  }
});

export const contactReducer = contactsSlice.reducer;
export const {
  selectContactIsCreating,
} = contactsSlice.selectors;