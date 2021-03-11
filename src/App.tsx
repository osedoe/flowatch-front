import React from 'react';
import { UserContext, UserContextProvider } from './context/UserContext';

const App = () => <>
    <UserContextProvider>
        <div>123</div>
    </UserContextProvider>
</>;

export default App;
