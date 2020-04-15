import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { HomePage } from '../components/homepage/Homepage';
import QuestionPage from '../components/questionpage/QuestionPage';
import LoginPage from '../components/loginpage/LoginPage';
import RegisterPage from '../components/registerpage/RegisterPage';

const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/> 
        <Route path="/registerpage" component={RegisterPage}/> 
        <Route path="/questionpage/:id" component={QuestionPage}/> 
        <Route path="/loginpage/" component={LoginPage}/> 
        {/* <Route path="/edit/:id"component={}/> */}
        {/* <Route component={NotFoundPage}/> */}
      </Switch>
    </BrowserRouter>
);

export default AppRouter;