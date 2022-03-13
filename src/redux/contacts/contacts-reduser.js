import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { onChangeFilter } from 'redux/contacts/contacts-actions';
import {
  fetchContacts,
  onSubmitHandler,
  deleteContact,
} from 'redux/contacts/contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [onSubmitHandler.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [onSubmitHandler.pending]: () => true,
  [onSubmitHandler.fulfilled]: () => false,
  [onSubmitHandler.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: error => console.log(error),
  [fetchContacts.pending]: () => null,
  [onSubmitHandler.rejected]: error => console.log(error),
  [onSubmitHandler.pending]: () => null,
  [deleteContact.rejected]: error => console.log(error),
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
