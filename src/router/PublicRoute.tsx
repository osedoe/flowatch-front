import React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from './Routes';


export interface PublicRouteProps extends RouteProps {
}

export const PublicRoute = (props: PublicRouteProps) => {
  return <Route {...props}/>;
};
