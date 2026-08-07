import React from "react";
import { useNavigate } from "react-router-dom";

function MiniProject(props) {
  const project = props.project ?? props;
  const { id, title, description, image, category } = project;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-(--lightGray) flex flex-col w-full cursor-pointer shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded-xl transition-transform duration-200 hover:scale-105"
    >
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      <div className="mt-2">
        <h1 className="text-black font-bold text-lg leading-tight">{title}</h1>
        <p className="text-(--gray) text-sm">{description}</p>
        <p className="inline-block bg-blue-100 px-3 py-0.6 rounded-full text-tag">
          <span aria-hidden="true">#</span>
          <span>{category}</span>
        </p>
      </div>
    </div>
  );
}
export default MiniProject;
