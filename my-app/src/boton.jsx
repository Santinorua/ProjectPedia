import React from "react";

function Boton({ texto, text, color, onClick }) {
    const label = texto ?? text;

    const style = color ? { "--boton-color": color } : undefined;

    return (
        <button
            style={style}
            className="boton text-b font-bold py-2 px-4 rounded cursor-pointer select-none"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Boton
