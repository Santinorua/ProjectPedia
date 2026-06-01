import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import MiniProject from "./MiniProject.jsx";
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
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full">
      <button
        onClick={() => navigate("/create")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        New Project
      </button>
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
  );
}

export default Home;
