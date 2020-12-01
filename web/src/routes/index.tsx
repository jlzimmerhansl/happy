import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanageMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import SuccessPage from '../pages/SuccessPage';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <PrivateRoute
            path="/"
            exact
            component={(props) => (
              <Landing {...props} toggleTheme={toggleTheme} />
            )}
          />
          <PrivateRoute path="/login" component={SignIn} />
          <PrivateRoute path="/app" component={OrphanagesMap} />
          <PrivateRoute path="/orphanages/create" component={CreateOrphanage} />
          <PrivateRoute path="/orphanages/:id" component={Orphanage} />
          <PrivateRoute path="/success" component={SuccessPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} isPrivate />
          <GlobalStyle />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
