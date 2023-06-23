import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./box/scroll-to-top";
import ThemeProvider from "./theme";
import { ThemeSettings, SettingsProvider } from "./box/settings";
import MotionLazyContainer from "./box/animate/MotionLazyContainer";
import Main from "./pages/Main";
import PortfolioList from "./pages/portfolio/PortfolioList";
import PortfolioListEN from "./pages/portfolio/PortfolioList_en";
import Admin from "./pages/auth/Admin";
import PortfolioDetail from "./pages/portfolio/PortfolioDetail";
import PortfolioDetailEN from "./pages/portfolio/PortfolioDetailEN";
import NotFound from "./pages/etc/NotFound";

//
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar2 from "./components/NavBar2";

function App() {
  const [data, setData] = useState([
    {
      idx: 0,
      e_title: "",
      e_client: "",
      e_dateStart: "",
      e_dateEnd: "",
      e_location: "",
      e_platform: "",
      e_for: "",
      e_work: "",
      e_contents: "",
      write_timestamp: "",
      e_picture1: "",
      e_picture2: "",
      e_picture3: "",
      e_picture4: "",
      e_picture5: "",
      lang: "",
    },
  ]);
  const [slice, setSlice] = useState(data.slice(0, 6));

  const [data_en, setData_en] = useState([
    {
      idx: 0,
      e_title: "",
      e_client: "",
      e_dateStart: "",
      e_dateEnd: "",
      e_location: "",
      e_platform: "",
      e_for: "",
      e_work: "",
      e_contents: "",
      write_timestamp: "",
      e_picture1: "",
      e_picture2: "",
      e_picture3: "",
      e_picture4: "",
      e_picture5: "",
      lang: "",
    },
  ]);
  const [slice_en, setSlice_en] = useState(data_en.slice(0, 6));

  useEffect(() => {
    axios
      .get("/api/portfolio")
      .then((res) => {
        setData(res.data);
        console.log("PASS-");
        setSlice(res.data.slice(0, 6));
      })
      .catch(() => {
        console.log("ERROR");
      });
    axios
      .get("/api/portfolio_en")
      .then((res) => {
        setData_en(res.data);
        console.log("PASS-");
        setSlice_en(res.data.slice(0, 6));
      })
      .catch(() => {
        console.log("ERROR");
      });
  }, [setData, setSlice, setData_en, setSlice_en]);

  return (
    <>
      <ScrollToTop />
      <SettingsProvider>
        <ThemeProvider>
          <ThemeSettings>
            <MotionLazyContainer>
              <Routes>
                <Route
                  path="/"
                  element={<Main slice={slice} slice_en={slice_en} />}
                />
                <Route path="/list" element={<PortfolioList data={data} />} />
                <Route
                  path="/list_en"
                  element={<PortfolioListEN data={data_en} />}
                />
                <Route
                  path="/portfolio/:id"
                  element={
                    <>
                      <NavBar2 />
                      <PortfolioDetail data={data} data_en={data_en} />
                    </>
                  }
                />
                <Route
                  path="/portfolio_en/:id"
                  element={
                    <>
                      <NavBar2 />
                      <PortfolioDetailEN data={data} data_en={data_en} />
                    </>
                  }
                />
                <Route
                  path="/auth/*"
                  element={<Admin data={data} data_en={data_en} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MotionLazyContainer>
          </ThemeSettings>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
