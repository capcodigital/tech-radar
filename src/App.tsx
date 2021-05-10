import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageWrapper from './PageWrapper';
import Menu from './Menu';
import { RadarContextProvider } from './RadarContextProvider';
import Footer from './Footer';
const App = () => {
  return (
    <Router>
      <Switch>
        <RadarContextProvider>
          <PageWrapper>
            <Menu />
            <Route exact path='/'>
              <Home />
            </Route>
          </PageWrapper>
          <Footer />
        </RadarContextProvider>
      </Switch>
    </Router>
  );
};

export default App;
