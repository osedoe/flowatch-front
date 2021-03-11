import { createContext, ReactNode, useState } from 'react';

const DEFAULT_VALUE = {} as any;

export const UserContext = createContext(DEFAULT_VALUE);

interface UserContextProviderProps {
    children?: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [isLogged, setIsLogged] = useState();

    return <UserContext.Provider value={[isLogged, setIsLogged]}>
        {children}
    </UserContext.Provider>;
};
