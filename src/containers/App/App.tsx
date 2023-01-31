import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import GlobalStyles from "@mui/material/GlobalStyles";
import { Box, CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyles styles={{ "& a": { textDecoration: "none" } }} />
      <BreadCrumbs />
      <ThemeProvider theme={radarTheme}>
        <RadarContextProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "calc(100vh - 25px - 18px)",
            }}
          >
            <PageWrapper>
              <Menu />
              <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category/*" element={<CategoryPage />} />
                <Route path="/technology/*" element={<ContentPage />} />
                <Route path="/projects/*" element={<ProjectPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageWrapper>
            <Footer />
          </Box>
        </RadarContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
