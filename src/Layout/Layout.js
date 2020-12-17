import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RaceWrapper from '../containers/RaceWrapper/RaceWrapper';
import Temp from '../temp';
// import { Route, Switch } from 'react-router-dom';

function Layout() {
  // console.log('[App] render');

  return (
    <Switch>
      <Route path="/" component={RaceWrapper} />
      {/* <Temp /> */}
    </Switch>
  );
}

export default Layout;
