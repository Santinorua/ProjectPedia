import Home from "./Home";
import Project from "./Project";
import CreateProject from "./CreateProject";
import EditProject from "./EditProject";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/create" element={<CreateProject />} />
      <Route path="/edit/:id" element={<EditProject />} />
    </Routes>
  );
}

export default App;
