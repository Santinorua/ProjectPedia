import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import MiniProject from "./MiniProject.jsx";
import Boton from "./boton.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error(error);
        return;
      }
      setProjects(data);
    }
    loadProjects();
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full flex p-4">
        <Boton texto="New Project" color="var(--lightBlue)" onClick={() => navigate("/create")} />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 p-4 w-full">
        {projects.map((project) => (
          <MiniProject
            key={project.key}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            category={project.category}
          />
        ))}
      </div>
    </div>
    
  );
}

export default Home;
