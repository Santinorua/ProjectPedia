import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Boton from "./boton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext.jsx";

function Project() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    async function loadProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setProject(data);
    }

    loadProject();
  }, [id]);
  if (!project) {
    return <p>Loading...</p>;
  }

  const canEdit = Boolean(
    user?.id != null &&
      project?.owner != null &&
      String(user?.id) === String(project?.owner)
  );
  console.log("Project owner:", project.owner);
  console.log("Current user ID:", user?.id);
  
  return (
    <div className="relative mb-8">
      {canEdit && (
        <Boton
          texto="Edit"
          color="var(--lightBlue)"
          onClick={() => navigate(`/edit/${id}`)}
        />
      )}
      <h1 className="text-center text-4xl font-bold">{project.title}</h1>
      <div className="w-full max-w-4xl mx-auto h-96 overflow-hidden rounded-xl">
        <img
          src={project.image}
          className="w-full h-full object-cover"
          alt={project.title}
        />
      </div>
      <h2 className="text-center text-2xl">{project.description}</h2>
      <h3 className="text-center text-1x1"> Creators: {project.creators}</h3>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit mx-auto mt-25 px-5 py-2 bg-blue-100 text-blue-700 text-lg rounded-full hover:bg-blue-200 transition-colors"
      >
        Try it
      </a>
    </div>
  );
}

export default Project;
