import React from 'react';
import { UserContextProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => <>
    <UserContextProvider>
        <BrowserRouter>
            <div>123</div>
        </BrowserRouter>
    </UserContextProvider>
</>;

export default App;
