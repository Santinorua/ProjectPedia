import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Project() {
  const { id } = useParams();

  const navigate = useNavigate();
  const returnHome = () => {
    navigate(`/`);
  };
  return (
    <div className="relative p-4">
      <button
        onClick={returnHome}
        className="absolute top-4 left-4 px-2 py-1 bg-(--lightBlue) text-(--gray) text-sm rounded-lg hover:bg-(--blue) transition-colors cursor-pointer"
      >
        Home
      </button>

      <h1 className="text-center text-2xl font-bold">Proyecto: {id}</h1>
    </div>
  );
}

export default Project;
