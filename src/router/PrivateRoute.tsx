import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { RouteProps } from './Routes';

export interface PrivateRouteProps extends RouteProps {
}

const PrivateRoute = ({ component, path, exact = true }: PrivateRouteProps) => {
  const { userState: { isAuthenticated } } = useUserContext();

  console.log('isAuthenticated: ', isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to="/signin" push={true}/>;
  }

  return <Route path={path} component={component} exact={exact}/>;
};

export default PrivateRoute;
