import UserBarra from "./userBarra.jsx"
import BarraBusqueda from "./barraBusqueda.jsx"
import { useNavigate } from "react-router-dom";
import Login from "./login.jsx";

function BarraSuperior(){
    const navigate = useNavigate();

    const returnHome = () => {
        navigate(`/`);
    };

    return (
        <div className="w-full h-[9%] bg-[var(--lightGray)] flex items-center">
            <div className="w-1/6 h-full">
                <button className="pl-4 h-full cursor-pointer" onClick={returnHome} >
                    <img src="src/assets/logo.png" alt="" className="h-full" />
                </button>
                
            </div>
            <div className="w-3/4 h-full flex items-center justify-center">
                <BarraBusqueda />
            </div>
            <div className="w-1/6 h-full flex items-center gap-4 pr-4 justify-end static">
                <UserBarra logueado={false} />
                {/* <Login></Login> */}
            </div>
        </div>
    )
}

export default BarraSuperior