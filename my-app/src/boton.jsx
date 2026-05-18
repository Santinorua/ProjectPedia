function Boton({texto, color, onClick}) {
    return (
        <button className={`bg-[${color}] hover:bg-[${color}] text-b font-bold py-2 px-4 rounded`} onClick={onClick}>
            {texto}
        </button>
    )
}

export default Boton
