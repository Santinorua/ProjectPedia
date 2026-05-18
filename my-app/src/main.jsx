import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import PanelProyectos from "./panelProyectos"
import BarraSuperior from './barraSuperior'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BarraSuperior/>
    {/* <PanelProyectos/> */}
  </StrictMode>,
)
