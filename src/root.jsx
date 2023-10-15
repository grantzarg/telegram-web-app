import React from 'react';
import App from './App';
import { ContextProvider } from './context';

function Root() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default Root;
