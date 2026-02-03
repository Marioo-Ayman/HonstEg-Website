import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import ScrollToTop from "@/components/ScrollToTop";
import "@/i18n";
import { LanguageProvider } from '@/context/Languagecontext.tsx';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <ScrollToTop /> 
      <LanguageProvider>
      <App />
    </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);