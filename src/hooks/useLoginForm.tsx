import { useReducer } from 'react';

interface LoginFormState {
  username: string;
  password: string;
}

type LoginFormAction =
  | { type: 'FILL_FIELD', fieldName: string, fieldValue: string }


const fillField = (state: LoginFormState, action: { fieldName: string, fieldValue: string }) => ({
  ...state,
  [action.fieldName]: action.fieldValue
});

function loginFormReducer(state: LoginFormState, action: LoginFormAction): LoginFormState {
  switch (action.type) {
    case 'FILL_FIELD':
      const { fieldName, fieldValue } = action;
      return fillField(state, { fieldName, fieldValue });
    default:
      return state as never;
  }
}

const initialFormState: LoginFormState = {
  username: '',
  password: ''
};

export const useLoginForm = () => {
  const [state, dispatch] = useReducer(loginFormReducer, initialFormState);

  return {
    username: state.username,
    password: state.password,
    updateInputField: (fieldName: string, fieldValue: string) => dispatch({ type: 'FILL_FIELD', fieldName, fieldValue })
  };
};
