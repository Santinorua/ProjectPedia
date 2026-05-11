import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MiniProject from "./miniProject.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full h-full">
      <MiniProject
        title="Ruani enfermo de mrd"
        description="Una descripción épica sobre geckos."
        image="./src/assets/gecko.jpg"
      />
      <MiniProject
        title="Ruani veni a labuar"
        description="Una descripción épica sobre geckos."
        image="./src/assets/p.png"
      />
      <MiniProject
        title="Mira attack on titan al menos"
        description="Una descripción épica sobre geckos."
        image="./src/assets/gecko.jpg"
      />
      <MiniProject
        title="Este si es un test serio"
        description="deah, mentira."
        image="./src/assets/p.png"
      />
    </div>
  </StrictMode>,
);
