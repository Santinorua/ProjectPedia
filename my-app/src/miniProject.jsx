function MiniProject({ title, description, image }) {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      <div className="mt-2">
        <h1 className="text-white font-bold text-lg leading-tight">{title}</h1>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
export default MiniProject;
