import Boton from "./boton.jsx"
import { useAuth } from "./authContext.jsx";

function UserBarra({ isLoggedIn, setShowLogin, setIsLoggingIn }) {
    const { user, logout } = useAuth();

    if (isLoggedIn === true) {
        return (
            <div className="flex h-[60%] gap-4">
                <div className="flex items-center">Bienvenido, {user?.username}!</div>
                <Boton texto="Logout" color="var(--red)" onClick={() => { logout(); }} />
            </div>
        )
    } else {
        return (
            <div className="flex h-[60%] gap-4">
                <Boton texto="LogIn" color="var(--lightBlue)" onClick={() => {setShowLogin(true); setIsLoggingIn(true)}} />
                <Boton texto="SignUp" color="var(--gray)" onClick={() => {setShowLogin(true); setIsLoggingIn(false)}} />
            </div>
        )
    }
}

export default UserBarra