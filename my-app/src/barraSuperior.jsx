import UserBarra from "./userBarra.jsx"
import BarraBusqueda from "./barraBusqueda.jsx"
import { useNavigate } from "react-router-dom";

function BarraSuperior(){
    const navigate = useNavigate();

    const returnHome = () => {
        navigate(`/`);
    };

    return (
        <div class="w-full h-[9%] bg-[var(--lightGray)] flex items-center">
            <div class="w-1/6 h-full">
                <button className="pl-4 h-full cursor-pointer" onClick={returnHome} >
                    <img src="src/assets/logo.png" alt="" className="h-full" />
                </button>
                
            </div>
            <div class="w-3/4 h-full flex items-center justify-center">
                <BarraBusqueda />
            </div>
            <div class="w-1/6 h-full flex items-center gap-4 pr-4 justify-end">
                <UserBarra logueado={false} />
            </div>
        </div>
    )
}

export default BarraSuperior