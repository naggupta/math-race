import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RaceWrapper from '../containers/RaceWrapper/RaceWrapper'
// import { Route, Switch } from 'react-router-dom';

function Layout() {
  // console.log('[App] render');

  return (
    <Switch>
      <Route path="/" component={RaceWrapper} />
    </Switch>
  );
}

export default Layout;
