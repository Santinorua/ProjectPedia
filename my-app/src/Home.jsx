import MiniProject from "./MiniProject.jsx";

function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full h-full">
      <MiniProject
        title="Ruani enfermo de mrd"
        description="Una descripción épica sobre geckos."
        image="./src/assets/gecko.jpg"
        category="Empatizando"
      />
      <MiniProject
        title="Ruani veni a labuar"
        description="Una descripción épica sobre geckos."
        image="./src/assets/p.png"
        category="Animales"
      />
      <MiniProject
        title="Mira attack on titan al menos"
        description="Una descripción épica sobre geckos."
        image="./src/assets/gecko.jpg"
        category="Lol"
      />
      <MiniProject
        title="Este si es un test serio"
        description="deah, mentira."
        image="./src/assets/p.png"
        category="Paleolitico"
      />
    </div>
  );
}

export default Home;
