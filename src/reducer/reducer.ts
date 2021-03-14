import { Reducer } from 'react';
import { State } from '../context/UserContext';

type Action =
  | { type: 'DO_LOGIN', username: string, password: string }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'DO_LOGIN':
      return doLogin(state, action);
    default:
      console.error('This should not happen!');
      return state as never;
  }
}

const doLogin: Reducer<State, Action> = (state, { username, password }) => {
  console.log('🍓', state);
  console.log('🍌', username, password);
  // FIXME: Temp mock till we implement login on the backend
  if (state.isAuthenticated) {
    return state;
  }

  if (username === 'ose' && password === '123') {
    return {
      ...state,
      isAuthenticated: true
    };
  }
  return state;
};
