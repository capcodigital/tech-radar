import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RadialPage from './RadialPage';
import RadialPage2 from './RadialPage2';
import BubblePage from './BubblePage';
import PageWrapper from './PageWrapper';
import Menu from './Menu';
const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path='/'>
            <RadialPage />
          </Route>
          <Route exact path='/radial2'>
            <RadialPage2 />
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
