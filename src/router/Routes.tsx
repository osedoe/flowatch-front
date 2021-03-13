import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

// TODO: Create Loading page & component for future skeletons
const Loading = () => <div>Loading...</div>;

export const Routes = () => {
  return <Suspense fallback={<Loading/>}>
    <Router>
      <Route path="/">
        <Home/>
      </Route>
    </Router>
  </Suspense>;
};
