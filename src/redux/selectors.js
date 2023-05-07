export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const loadingStatus = state => state.contacts.isLoading;

export const hasError = state => state.contacts.error;
