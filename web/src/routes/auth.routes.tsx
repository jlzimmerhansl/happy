import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanageMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import SuccessPage from '../pages/SuccessPage';

const AuthRoutes: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route
            path="/"
            exact
            render={(props) => <Landing {...props} toggleTheme={toggleTheme} />}
          />
          <Route path="/login" component={SignIn} />
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
          <Route path="/success" component={SuccessPage} />
          <GlobalStyle />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
