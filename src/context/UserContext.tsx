import { createContext, ReactNode, useContext, useState } from 'react';

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

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Not UserContext found!');
  }

  return context;
};
