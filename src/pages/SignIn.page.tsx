import React from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { Layout } from '../components/layout/Layout';
import { useUserContext } from '../context/UserContext';
import { useLoginForm } from '../hooks/useLoginForm';
import { LoginBox } from '../components/loginbox/LoginBox';


const SignInPage = () => {
  const history = useHistory();
  const { userState: { isAuthenticated }, dispatcher } = useUserContext();

  const { username, password, updateInputField } = useLoginForm();

  const handleInputChange = (fieldName: string): StandardInputProps['onChange'] =>
    ({ target: { value } }) =>
      updateInputField(fieldName, value);

  const handleLogin = () => {
    dispatcher.doLogin(username, password);
    history.push('/');
  };

  if (isAuthenticated) {
    return <Redirect to="/"/>;
  }

  return <Layout>
    <LoginBox onChange={handleInputChange} onLogin={handleLogin}/>
  </Layout>;
};

SignInPage.displayName = 'Home Page';
export default SignInPage;
