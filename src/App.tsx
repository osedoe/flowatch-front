import React from 'react';
import { UserContextProvider } from './context/UserContext';
import { Routes } from './router/Routes';

const App = () => <UserContextProvider>
  <Routes/>
</UserContextProvider>;

export default App;
