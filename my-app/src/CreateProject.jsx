import { supabase } from "./supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext.jsx";

function CreateProject() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState(user?.id || null);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [creators, setCreators] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const id = title.toLowerCase().trim().replaceAll(" ", "-");

    const { data, error } = await supabase.from("projects").insert([
      {
        id,
        owner: user?.id,
        title,
        description,
        image,
        url,
        creators,
        category,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Failed to create project");
      return;
    }
    console.log(data);
    console.log(error);

    navigate("/");
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Create Project</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg p-2"
          rows="4"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <input
          type="text"
          placeholder="Repository URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <input
          type="text"
          placeholder="Creators (e.g. Fede, Feli)"
          value={creators}
          onChange={(e) => setCreators(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="border rounded-lg p-2" 
          required
        >
          <option value="" disabled>Select a Category</option>
          <option value="videogame">Videogame</option>
          <option value="ai">AI</option>
          <option value="website">Website</option>
          <option value="hardware">Hardware</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
