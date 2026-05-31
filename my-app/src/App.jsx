import Home from "./Home";
import Project from "./Project";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
