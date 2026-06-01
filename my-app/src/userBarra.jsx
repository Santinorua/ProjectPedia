import Boton from "./boton.jsx"
import { useAuth } from "./authContext.jsx";

function UserBarra({ isLoggedIn, setShowLogin, setIsLoggingIn }) {
    const { user, logout } = useAuth();

    if (isLoggedIn === true) {
        return (
            <div className="flex gap-4">
                <div>Bienvenido, {user?.username}!</div>
                <Boton texto="Cerrar Sesión" color="var(--red)" onClick={() => { logout(); }} />
            </div>
        )
    } else {
        return (
            <div className="flex gap-4">
                <Boton texto="Iniciar Sesión" color="var(--lightBlue)" onClick={() => {setShowLogin(true); setIsLoggingIn(true)}} />
                <Boton texto="Registrarse" color="var(--gray)" onClick={() => {setShowLogin(true); setIsLoggingIn(false)}} />
            </div>
        )
    }
}

export default UserBarra