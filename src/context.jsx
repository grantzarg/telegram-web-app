import React, { createContext, useReducer, useMemo } from 'react';

export const Context = createContext();

const initialState = {
  userId: null,
  balance: 122.14,
  exchangeRate: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, userId: action.payload };
    case 'SET_BALANCE':
      return { ...state, balance: action.payload };
    case 'SET_EXCHANGE_RATE':
      return { ...state, exchangeRate: action.payload };
    default:
      return state;
  }
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
