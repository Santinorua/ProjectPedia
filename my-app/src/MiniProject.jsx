import { useNavigate } from "react-router-dom";

function MiniProject({ id, title, description, image, category }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-(--lightGray) flex flex-col w-full cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded-xl transition-transform duration-200 hover:scale-105"
    >
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      <div className="mt-2">
        <h1 className="text-black font-bold text-lg leading-tight">{title}</h1>
        <p className="text-(--gray) text-sm">{description}</p>
        <p className="inline-block bg-blue-100 px-3 py-0.6 rounded-full text-tag">
          #{category}
        </p>
      </div>
    </div>
  );
}
export default MiniProject;
