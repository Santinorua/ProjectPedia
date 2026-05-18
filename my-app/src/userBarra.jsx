import Boton from "./boton.jsx"

function UserBarra(logueado){
    if(logueado == true){
    
    } else {
        return (
            <Boton texto="Iniciar Sesión" color="var(--lightBlue)" onClick={() => console.log("Iniciar Sesión")} />
            // <Boton texto="Registrarse" color="var(--lightGray)" onClick={() => console.log("Registrarse")} />
        )
    }
}


export default UserBarra