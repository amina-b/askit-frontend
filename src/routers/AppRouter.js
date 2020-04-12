import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { HomePage } from '../components/Homepage';

const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/> 
        {/* <Route path="/edit/:id"component={}/> */}
        {/* <Route component={NotFoundPage}/> */}
      </Switch>
    </BrowserRouter>
);

export default AppRouter;