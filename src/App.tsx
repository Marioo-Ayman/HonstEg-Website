import Navbar from "@/components/Navbar/Navbar";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import {LandingPage} from "@/pages/CompanyDetails";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createEmotionCache } from "@/emotionCache";
import HHC from "@/components/Companies/HHC";
import HRC from "@/components/Companies/HRC";
import HFBC from "@/components/Companies/HFBC";
import {egpPackages, getUsdPackages,getHHpacks} from "@/constance/packs"
function App() {
  const Apply = lazy(() => import("./pages/Apply"));
  const ApplySP = lazy(() => import("./pages/CustomApply"));
  const Companies = lazy(() => import("./pages/Companies"));
  const About = lazy(() => import("./pages/About"));
  const { t,i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
 const HRpackages = egpPackages(t);
 const HFpackages = getUsdPackages(t);
 const HHpackages = getHHpacks(t);

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
              <Route path="/invest/:pac" element={<Apply />} />
              <Route path="/Apply/:pac" element={<ApplySP />} />
              <Route path="/our-companies" element={<Companies />} />
              <Route path="/About-Us" element={<About />} />
              <Route path="/Honest-Financial-Brokerage" element={  
                                                  <LandingPage
                                                    content={<HFBC />}
                                                    customPackages={HFpackages} 
                                                   />} />
              <Route path="/HR-Academy" element={  
                                                  <LandingPage
                                                    content={<HRC />}
                                                    customPackages={HRpackages} 
                                                  />} />
              <Route path="/Honest-Homes" element={  
                                                  <LandingPage
                                                    content= {<HHC />}
                                                    customPackages={HHpackages} 
                                                  />} />
            </Routes>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
