import Navbar from "@/components/Navbar";
import Apply from "@/pages/Apply";
import Companies from "@/pages/Companies";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <CircularProgress color="warning" />
          </div>
        }>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/invest" element={<Apply />} />
              <Route path="/our-companies" element={<Companies />} />
            </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
