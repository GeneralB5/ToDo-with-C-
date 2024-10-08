import { useContext, useEffect, useState } from "react"
import ToDoDiv from "./divToDo/ToDoDiv"
import { UserContext } from "../../Context/Context"
import agruparElementos from "../../functions/arryFunc/arryFuncAndSort"
import OptionsMenu from "./menuOpt/optionsMenu"
import sortByProp from "../../functions/arryFunc/arrySorted"
import useWindowSize from "../../customHook/widthHook/widthHook"
import SpinnerLoad from "../Loading/loadingSpinner.jsx"
function SectionToDoList({}){
    const {valoresUser} = useContext(UserContext)
    const width = useWindowSize()
    const [ToDoArry,setToDoArry] = useState([])
    const [page,setPage] = useState(0)
    const [groupBy,setGroupBy] = useState(4)
    const [loading,setLoading]= useState(true)
    const [criterio,setCriterio]= useState({title:'Date ↓',value:[{ prop: 'date', orden: 'desc' }]})
      
  useEffect(() => {
    setLoading(true)
    console.log(ToDoArry)
    const sorted = sortByProp(valoresUser.toDoList,criterio.value)
    const obj = agruparElementos(sorted,width < 900?2:4)
    setToDoArry(obj)
    setLoading(false)
  }, [valoresUser.toDoList.length,criterio]);

    useEffect(()=>{
      if(width <= 1000 && groupBy != 2){
        setLoading(true)
        setGroupBy(2)
        setPage(0)
        const newArry = agruparElementos(valoresUser.toDoList,2)
        setToDoArry(newArry)
        setLoading(false)
      }

        if(width >= 1000 && groupBy != 4 && width !== 1000){
            setLoading(true)
            setGroupBy(4)
            setPage(0)
            const newArry = agruparElementos(valoresUser.toDoList,4)
            setToDoArry(newArry)
            setLoading(false)
        }
        
    },[width,criterio])
    return(
        <div className="gradientDiv">
            <OptionsMenu setSelectedValue={setCriterio} selectedValue={criterio}/>
            <section className="sectionToDoPage">
              { loading == true? <SpinnerLoad />
                :
                  ToDoArry.length==0? 
                  <h2 style={{fontFamily:"system-ui",margin:'40px auto auto auto'}}>Nada por aqui...</h2>
                  :
                  ToDoArry[page].map((x)=>(<ToDoDiv key={x.id} obj={x}/>))
                }
            </section>
            <div className="divArrowsCreate" style={{
    backgroundColor:'whitesmoke',
    height:40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: "space-around",
    margin: '5px auto auto auto',
    width:"80%",
    gap:40}}>
                        <i onClick={()=>{page!=0?setPage(page-1):()=>{}}} style={page==0?{filter:"drop-shadow(0 0 2px lightgray)",color:"#1d1d1d"}:{}} className="bi bi-arrow-left-circle-fill"></i>                    
                        <i onClick={()=>{page!=ToDoArry.length-1?setPage(page+1):()=>{}}} style={page==ToDoArry.length-1?{filter:"drop-shadow(0 0 2px lightgray)",color:"#1d1d1d"}:{}} className="bi bi-arrow-right-circle-fill"></i>
            </div>
        </div>
    )
}
export default SectionToDoList