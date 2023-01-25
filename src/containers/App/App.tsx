import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import IntroPage from "../IntroPage/IntroPage";
import Home from "../HomePage/Home";
import CategoryPage from "../CategoryPage/CategoryPage";
import ContentPage from "../ContentPage/ContentPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import PageWrapper from "components/PageWrapper/PageWrapper";
import Menu from "components/Menu/Menu";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { ThemeProvider } from "styled-components";
import { radarTheme } from "../../theme";
import Footer from "components/Footer/Footer";
import BreadCrumbs from "components/BreadCrumb/";

const App = () => {
  return (
    <Router>
      <BreadCrumbs />
      <ThemeProvider theme={radarTheme}>
        <RadarContextProvider>
          <PageWrapper>
            <Menu />
            <Switch>
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
              <Route path="/projects">
                <ProjectPage />
              </Route>
              <Route exact path="/404">
                <NotFoundPage />
              </Route>
              <Redirect path="*" to="/404" />
            </Switch>
          </PageWrapper>
          <Footer />
        </RadarContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
