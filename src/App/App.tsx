import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditExpense from '../Components/EditExpensePage'
import Dashboard from '../Components/Dashboard'
import CreateExpensePage from '../Components/CreateExpensePage'
import HelpPage from '../Components/HelpPage'
import NotFoundPage from '../Components/NotFoundPage'
import Header from '../Components/Header'

const SwitchRouters = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact={true} />
    <Route path="/edit" component={EditExpense} exact={true} />
    <Route path="/create" component={CreateExpensePage} exact={true} />
    <Route path="/help" component={HelpPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <SwitchRouters />
    </div>
  </BrowserRouter>
);
export default AppRouter;

