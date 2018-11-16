'user strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route
      name="authors"
      handler={require('./components/authors/authorPage')}
    />
    <Redirect from="awthurs" to="authors" />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;