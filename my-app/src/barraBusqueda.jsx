import React from "react";
import { useSearch } from "./searchContext.jsx";

function BarraBusqueda({ search: searchProp, setSearch: setSearchProp }) {
    const { search, setSearch } = useSearch();
    const value = searchProp ?? search;
    const handleChange = setSearchProp ?? setSearch;

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="bg-[var(--white)] w-1/2 h-1/2 outline-none rounded-full pl-5"
            placeholder="Buscar..."
        />
    )
}

export default BarraBusqueda;