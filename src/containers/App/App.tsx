import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RadarContextProvider } from "../../components/RadarContextProvider/RadarContextProvider";
import IntroPage from "../IntroPage/IntroPage";
import Home from "../HomePage/Home";
import CategoryPage from "../CategoryPage/CategoryPage";
import ContentPage from "../ContentPage/ContentPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Menu from "../../components/Menu/Menu";
import { ThemeProvider } from "styled-components";
import { radarTheme } from "../../theme";
import Footer from "../../components/Footer/Footer";
import BreadCrumbs from "../../components/BreadCrumb/";

const App = () => {
  return (
    <Router>
      <BreadCrumbs />
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
              <Route path="/demo">
                <ProjectPage />
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
