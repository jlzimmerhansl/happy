import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
};

export default AppRoutes;
