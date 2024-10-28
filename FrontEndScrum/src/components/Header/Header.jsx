import { useContext } from "react"
import logoPrincipal from "../../assets/Icon/ToDoList.png"
import {NavLink} from "react-router-dom"
import { UserContext } from "../../Context/Context"
function Header(){
    const {valoresUser} = useContext(UserContext)
    return(
        <header className="header_layout">
            <div>
                <img style={{
                    borderRadius:"50%",
                    border:" 1px solid darkslategray"
                }} src={logoPrincipal} alt="LogoPrincipal" width={60} height={60} />
            </div>
            {valoresUser == null? ""
            :
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
                <NavLink to={"/ToDo"} className="iconosheader"><i class="bi bi-house"></i></NavLink>
                <NavLink to={"/User"} className="iconosheader"><i class="bi bi-person"></i></NavLink>
            </div>}
        </header>
    )
}
export default Header