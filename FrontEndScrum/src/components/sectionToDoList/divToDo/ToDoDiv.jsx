import { useContext, useEffect, useState } from "react"
import divideDateAndColor from "../../../functions/dateFunc/DateAndColor"
import { UserContext } from "../../../Context/Context"
import axios from "axios"
function ToDoDiv({obj}){
    const {valoresUser,SetUser} = useContext(UserContext)
    const [expanded, setExpanded] = useState(false)
    const [settings,setSettings] = useState({
        color:"",
        border:""
    })

    const deleteToDo =async ()=>{
        try {
            if(!obj.id||!valoresUser.email) throw new Error("No se obtuvieron todos los valores")
            const URL= import.meta.env.VITE_URL_ToDo+"DeleteToDo/"+obj.id   
            const data = await axios.delete(URL,{
                baseURL:import.meta.env.VITE_BASEURL,
                withCredentials:true
            })
            const newArry = valoresUser.toDoList.filter(x=>x.id !== obj.id)
            SetUser({...valoresUser,toDoList:newArry})
        } catch (error) {
            throw new Error(error.message)
        }
    }

    useEffect(()=>{
        const border = obj.priority==1?"neon-green": obj.priority == 2?"neon-yellow":"neon-red";
        setSettings({color:divideDateAndColor(obj.expDate),border})         
    },[])
    
    return(
        <div className={"divsToDoListed "+settings.border}>
                    <div style={{height:"80%",padding:"5px 5px 0 0"}}>
                        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",textAlign:"center"}}>
                            <h2 style={{height:20,marginLeft:15}}>{obj.title}</h2>
                            <i onClick={(e)=>{
                                e.preventDefault()
                                deleteToDo()
                            }} style={{fontSize:18,height:10,width:15,marginRight:5,cursor:'pointer'}} className="bi bi-x"></i>
                        </div>
                        <p onClick={()=>{setExpanded(!expanded)}} className={expanded ? 'expanded' : ''} style={{overflow:"hidden",height:70,width:"80%",marginLeft:7,fontSize:14,marginTop:10}}>{obj.description}</p>
                    </div>
                    <div style={{display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        width:"100%",
                        backgroundColor:"var(--main-bg-color)",
                        color:`var(${'--Target-'+settings.color})`,
                        height:'25px',
                        borderBottomLeftRadius:'11px',
                        borderBottomRightRadius:'11px',
                        boxShadow:"inherit"}}>
                        <p>{obj.expDate}</p>
                        <i className="bi bi-bullseye"></i>
                    </div>
                </div>
    
    )
}
export default ToDoDiv