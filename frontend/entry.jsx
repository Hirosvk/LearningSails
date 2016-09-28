// const ReactDOM = require('react-dom');
// const React = require('react');
// const ReactRouter = require('react-router');
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
// const hashHistory = ReactRouter.hashHistory;
// const Redirect = ReactRouter.Redirect;

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RestaurantActions } from './actions/restaurant_actions';
import { First } from './components/first';

window.document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<First />, document.getElementById("body"));
});

window.RestaurantActions = RestaurantActions;
