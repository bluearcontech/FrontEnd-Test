/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import AppContainer from './app/containers/AppContainer'
import createStore from './app/store'
// Our app
import App from './app/App';
import About from './app/views/about';
import Home from './app/views/home';
import PostDetail from './app/views/postDetail';
import './app.scss';
const initialState = {
}

const store = createStore(initialState)

render((
  <AppContainer store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='home' component={Home} />
        <Route path='post/:id' component={PostDetail} />
        <Redirect from='*' to='/home' />
      </Route>
    </Router>
  </AppContainer>
), document.getElementById('root'));
