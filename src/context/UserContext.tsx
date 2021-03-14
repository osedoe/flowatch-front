import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import { reducer } from '../reducer/reducer';


export interface State {
  isAuthenticated?: boolean;
}

interface ContextDispatcher {
  doLogin: (username: string, password: string) => void;
}

export interface ContextState {
  userState: State;
  dispatcher: ContextDispatcher;
}

interface UserContextProviderProps {
  children?: ReactNode;
}

const initialState: State = {
  isAuthenticated: false
};

export const UserContext = createContext<ContextState>({} as ContextState);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo<ContextState>(() => {
    const dispatcher = {
      doLogin: (username: string, password: string) => dispatch({ type: 'DO_LOGIN', username, password })
    };

    return {
      userState: state,
      dispatcher
    };
  }, [state]);

  return <UserContext.Provider value={contextValue}>
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
