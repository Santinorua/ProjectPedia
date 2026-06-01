import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./authContext.jsx";

import PanelProyectos from "./panelProyectos"
import BarraSuperior from './barraSuperior'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <BarraSuperior/>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
