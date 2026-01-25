import Navbar from "@/components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const Main = lazy(() => import("@/pages/Main"));
  const Apply = lazy(() => import("@/pages/Apply"));
  const Footer = lazy(() => import("@/components/Footer"));
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <CircularProgress color="warning" />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/invest" element={<Apply />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
