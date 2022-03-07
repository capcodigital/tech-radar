import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RadarContextProvider } from "./RadarContextProvider";
import IntroPage from "../pages/IntroPage";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ContentPage from "../pages/ContentPage";
import PageWrapper from "../components/PageWrapper";
import Menu from "./Menu";
import { ThemeProvider } from "styled-components";
import { radarTheme } from "../theme";
import Footer from "../components/Footer";
const App = () => {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={radarTheme}>
          <RadarContextProvider>
            <PageWrapper>
              <Menu />
              <Route exact path="/">
                <IntroPage />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/category">
                <CategoryPage />
              </Route>
              <Route path="/technology">
                <ContentPage />
              </Route>
            </PageWrapper>
            <Footer />
          </RadarContextProvider>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default App;
