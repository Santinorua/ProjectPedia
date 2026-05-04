import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import PanelProyectos from "./panelProyectos"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelProyectos/>
  </StrictMode>,
)
