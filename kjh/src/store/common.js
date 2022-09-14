import React from 'react';

export const Context = React.createContext(null);

export const initialState = {
  loading: false,
  error: false,
  success: false,
  errorMessage: '',
};

export function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: false,
        success: false,
      };
    case 'ERROR':
      return {
        loading: false,
        error: true,
        success: false,
        errorMessage: action.errorMessage,
      };
    case 'SUCCESS':
      return {
        loading: false,
        error: false,
        success: true,
      };
    default:
      return state;
  }
}
