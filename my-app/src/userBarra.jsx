import Boton from "./boton.jsx"

function UserBarra(logueado){
    if(logueado == true){
    
    } else {
        return (
            <div class="flex gap-4">
                <Boton texto="Iniciar Sesión" color="var(--lightBlue)" onClick={() => console.log("Iniciar Sesión")} />
                <Boton texto="Registrarse" color="var(--gray)" onClick={() => console.log("Registrarse")} />
            </div>
        )
    }
}


export default UserBarra