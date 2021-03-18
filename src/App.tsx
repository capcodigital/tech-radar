import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import RadialPage from './RadialPage';
import BubblePage from './BubblePage';
const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  text-align: center;
`;

function App() {
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
}

export default App;
