import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MiniProject from "./miniProject.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div class="w-full h-full">
      <MiniProject />
    </div>
  </StrictMode>,
);
