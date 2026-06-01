import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import MiniProject from "./MiniProject.jsx";
import Boton from "./boton.jsx";
import { useNavigate } from "react-router-dom";
import { useSearch } from "./searchContext";

function Home() {
  const { search: textoBuscado } = useSearch();
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
        {projects.map((project) => {
          if (project.title?.toLowerCase().includes(textoBuscado.toLowerCase())) {
            return (
              <MiniProject
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
              />
            )
          } else{
            return null;
          }
        })}
      </div>
    </div>
    
  );
}

export default Home;
