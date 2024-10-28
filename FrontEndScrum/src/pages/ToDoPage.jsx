import { useContext, useEffect, useState} from "react"
import CreationDiv from "../components/creation/creationDiv"
import DivIntruc from "../components/divInstrucciones/divIntrucc"
import SectionToDoList from "../components/sectionToDoList/sectionToDoList"
import { UserContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"
import SpinnerLoad from "../components/Loading/loadingSpinner"

function Todopage(){
const navigate = useNavigate();
const {valoresUser} = useContext(UserContext)
const [loading , setLoading]= useState(true)
useEffect(()=>{
    if(!valoresUser) navigate("/error/session")
    return(
setLoading(false)
)
},[])
if(loading) return(<SpinnerLoad />)
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