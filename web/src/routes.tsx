import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanageMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes: React.FC = () => {
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
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
          <GlobalStyle />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
