import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import InfoPage from './InfoPage';
import PageWrapper from './PageWrapper';
import Menu from './Menu';
import RadarContext from './RadarContext';

const App = () => {
  const [name, setName] = useState('');
  const value = { name, setName };
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <RadarContext.Provider value={value}>
            <Menu />
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/info'>
              <InfoPage />
            </Route>
          </RadarContext.Provider>
        </Switch>
      </Router>
    </PageWrapper>
  );
};

export default App;
