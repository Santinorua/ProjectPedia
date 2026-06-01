import UserBarra from "./userBarra.jsx"
import BarraBusqueda from "./barraBusqueda.jsx"
import { useNavigate } from "react-router-dom";
import Login from "./login.jsx";
import { useState } from "react";
import { useAuth } from "./authContext.jsx";

function BarraSuperior(){
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const { user } = useAuth();

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
                <UserBarra isLoggedIn={Boolean(user)} setShowLogin={setShowLogin} setIsLoggingIn={setIsLoggingIn} />
                <Login showLogin={showLogin} setShowLogin={setShowLogin} isLoggingIn={isLoggingIn} setIsLoggingIn={setIsLoggingIn}></Login>
            </div>
        </div>
    )
}

export default BarraSuperior