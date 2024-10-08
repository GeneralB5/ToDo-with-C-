import { useContext, useEffect} from "react"
import CreationDiv from "../components/creation/creationDiv"
import DivIntruc from "../components/divInstrucciones/divIntrucc"
import SectionToDoList from "../components/sectionToDoList/sectionToDoList"
import { UserContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"
import SpinnerLoad from "../components/Loading/loadingSpinner"

function Todopage(){
const navigate = useNavigate();
const {valoresUser} = useContext(UserContext)
useEffect(()=>{
    if(valoresUser.email === "") navigate("/error/session")
},[])
if(valoresUser.email=="") return(<SpinnerLoad />)
return(
    <>
    <div className="divWrapperToDo" style={{display:"flex",justifyContent:"space-around",alignItems:'center',marginBottom:30}}>
        <SectionToDoList />
        <CreationDiv />
    </div>
    <DivIntruc />
    </>
)
}
export default Todopage