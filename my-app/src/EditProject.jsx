import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProject() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [creators, setCreators] = useState("");
  const [category, setCategory] = useState("");

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

      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setUrl(data.url);
      setCreators(data.creators);
      setCategory(data.category);

      setLoading(false);
    }

    loadProject();
  }, [id]);
  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        image,
        url,
        creators,
        category,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to update project");
      return;
    }

    navigate(`/project/${id}`);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Project</h1>

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
          placeholder="Creators"
          value={creators}
          onChange={(e) => setCreators(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-2"
          required
        />

        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProject;
