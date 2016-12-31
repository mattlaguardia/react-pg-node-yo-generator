import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';

import Main from './components/main.js'

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const NotFoundRoute = Router.NotFoundRoute

const routes = (
  <Router history={appHistory}>
    <Route  path='/' component={Main} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('react-container'));
