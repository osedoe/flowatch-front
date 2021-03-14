import React from 'react';
import { UserContextProvider } from './context/UserContext';
import { Theme } from './theme/Theme';
import { Routes } from './router/Routes';

const App = () => <UserContextProvider>
  <Theme>
    <Routes/>
  </Theme>
</UserContextProvider>;

export default App;
