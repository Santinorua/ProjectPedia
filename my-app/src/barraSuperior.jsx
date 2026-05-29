import UserBarra from "./userBarra.jsx"
import BarraBusqueda from "./barraBusqueda.jsx"

function BarraSuperior(){
    return (
        <div class="w-full h-[9%] bg-[var(--lightGray)] flex items-center">
            <div class="w-1/3 h-full"></div>
            <div class="w-1/2 h-full flex items-center justify-center">
                <BarraBusqueda />
            </div>
            <div class="w-1/5 h-full flex items-center gap-4">
                <UserBarra logueado={false} />
            </div>
        </div>
    )
}

export default BarraSuperior