import React, { ComponentType, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import HomePage from '../pages/Home.page';
import SignInPage from '../pages/SignIn.page';


export interface RouteProps {
  path: string;
  exact?: boolean;
  component: ComponentType;
}

// TODO: Create Loading page & component for future skeletons
const Loading = () => <div>Loading...</div>;

export const Routes = () => {
  return <Suspense fallback={<Loading/>}>
    <Router>
      <PrivateRoute path="/" component={HomePage}/>
      <PublicRoute path="/signin" component={SignInPage}/>
    </Router>
  </Suspense>;
};
