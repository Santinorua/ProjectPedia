import { useSearch } from "./searchContext";

function BarraBusqueda() {
    const { search, setSearch } = useSearch();

    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[var(--white)] w-1/2 h-1/2 outline-none rounded-full pl-5"
            placeholder="Buscar"
        />
    )
}

export default BarraBusqueda;