import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RadarContextProvider } from './RadarContextProvider';
import Home from './Home';
import CategoryPage from './CategoryPage';
import ContentPage from './ContentPage';
import PageWrapper from './PageWrapper';
import Menu from './Menu';
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
            <Route path='/category'>
              <CategoryPage />
            </Route>
            <Route path='/technology'>
              <ContentPage />
            </Route>
          </PageWrapper>
          <Footer />
        </RadarContextProvider>
      </Switch>
    </Router>
  );
};

export default App;
