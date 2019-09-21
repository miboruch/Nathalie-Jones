import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Transition } from 'react-spring/renderprops';
import { easeCubicOut } from 'd3-ease';

import MainTemplate from './templates/MainTemplate';
import LandingPage from './pages/LandingPage/LandingPage';
import ModelingPage from './pages/ModelingPage/ModelingPage';
// ! CREATE ROUTER FOR PAGES (FROM LANDINGPAGE.js)

const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/modeling' component={ModelingPage} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default App;
