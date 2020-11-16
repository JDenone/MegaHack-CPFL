import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Packages from './pages/Packages';
import Historical from './pages/Historical';

function Routes() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Switch>
          <Route path="/" exact component={Packages} />
          <Route path="/historical" component={Historical} />
        </Switch>
      </Sidebar>
    </BrowserRouter>
  );
}

export default Routes;