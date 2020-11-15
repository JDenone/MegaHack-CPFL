import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Packages from './pages/Packages';
import Sidebar from './components/Sidebar';

function Routes() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Switch>
          <Route path="/" exact component={Packages} />
        </Switch>
      </Sidebar>
    </BrowserRouter>
  );
}

export default Routes;