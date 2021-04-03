import React from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LoginBox } from '../components/login/LoginBox';
import { useUserContext } from '../context/UserContext';
import { useLoginForm } from '../hooks/useLoginForm';


const SignInPage = () => {
  const history = useHistory();
  const { userState: { isAuthenticated }, dispatcher } = useUserContext();

  const { username, password, updateInputField } = useLoginForm();

  // @ts-ignore
  const handleInputChange = (fieldName: string) => ({ target: { value } }) => updateInputField(fieldName, value);

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
