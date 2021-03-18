import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RadialPage from './RadialPage';
import BubblePage from './BubblePage';
import PageWrapper from './PageWrapper';

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path='/radial'>
            <RadialPage />
          </Route>
          <Route exact path='/bubble'>
            <BubblePage />
          </Route>
        </Switch>
      </Router>
    </PageWrapper>
  );
};

export default App;
