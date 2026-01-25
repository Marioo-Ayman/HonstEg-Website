import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Main from '@/pages/Main';
import Apply from '@/pages/Apply';
import './App.css'
import { Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/invest" element={<Apply />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
