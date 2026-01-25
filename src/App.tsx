import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Main from '@/pages/Main';
import Apply from '@/pages/Apply';
import './App.css'
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
function App() {

const Main = lazy(() => import("@/pages/Main"));
const Footer = lazy(() => import("@/components/Footer"));
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/invest" element={<Apply />} />
        </Routes>
      <Footer />
    </Suspense>
    </>
  )
}

export default App
