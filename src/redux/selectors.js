import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactList.items;
export const selectIsLoading = state => state.contactList.isLoading;
export const selectError = state => state.contactList.error;
export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contactList, filter) => {
    const filteredContacts = contactList.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);
