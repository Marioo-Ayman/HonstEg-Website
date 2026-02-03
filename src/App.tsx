import Navbar from "@/components/Navbar/Navbar";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createEmotionCache } from "@/emotionCache";
function App() {
  const Apply = lazy(() => import("./pages/Apply"));
  const Companies = lazy(() => import("./pages/Companies"));
  const About = lazy(() => import("./pages/About"));
  const { i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const theme = createTheme({ direction });
  const cache = createEmotionCache(direction);

  // keep DOM direction synced
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <CircularProgress color="warning" />
              </div>
            }
          >
            <Navbar />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/invest" element={<Apply />} />
              <Route path="/our-companies" element={<Companies />} />
              <Route path="/About-Us" element={<About />} />
            </Routes>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
