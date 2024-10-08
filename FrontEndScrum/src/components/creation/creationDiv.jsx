import { useEffect, useState } from "react"
import Levels from "./levels/levels"
import DescriptionAndT from "./descriptAndTitle/desAndTil"
import ExpCrea from "./exp/expCreat"
import SpinnerLoad from "../Loading/loadingSpinner"

function CreationDiv(){
    const [statesLevel,setStatesLevel] = useState(1)
    const [form,useform] = useState({
        Priority:"",
        Title:"",
        Description:"",
        ExpDate:""
    })
    useEffect(()=>{
        useform({Priority:"",
            Title:"",
            Description:"",
            ExpDate:""})
        setStatesLevel(1)
    },
    [statesLevel==0])
    if(statesLevel == 0){
        return(<SpinnerLoad />)
    }
    return(
        <div className="creationDiv">
            <div style={{height:"75%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Levels state={form} stateChange={useform} style={ statesLevel==1?{}:{display:"none"}} />
                <DescriptionAndT form={form} useDescript={useform}  style={statesLevel==2?{}:{display:"none"}}/>
                <ExpCrea setStateLev={setStatesLevel} form={form} useDateExp={useform} style={statesLevel==3?{}:{display:"none"}}/>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",height:"25%",gap:20}}>
                <div className="divArrowsCreate" style={{height:30,display:"flex",justifyContent:"space-around",width:"100%",gap:'40px'}}>
                    <i onClick={()=>{statesLevel!=1?setStatesLevel(statesLevel-1):()=>{}}} style={statesLevel==1?{filter:"drop-shadow(0 0 2px lightgray)",color:"#1d1d1d"}:{}} className="bi bi-arrow-left-circle-fill"></i>                    
                    <i onClick={()=>{statesLevel!=3?setStatesLevel(statesLevel+1):()=>{}}} style={statesLevel==3?{filter:"drop-shadow(0 0 2px lightgray)",color:"#1d1d1d"}:{}} className="bi bi-arrow-right-circle-fill"></i>
                </div>
                <div style={{display:"flex",alignItems:"end",gap:30}} >
                    <span style={statesLevel==1?{animation:'changeColorLevel 0.25s ease-in forwards'}:{}} className="spanLevel neon-blue">1</span>
                    <span style={statesLevel==2?{animation:'changeColorLevel 0.25s ease-in forwards'}:{}} className="spanLevel neon-blue">2</span>
                    <span style={statesLevel==3?{animation:'changeColorLevel 0.25s ease-in forwards'}:{}} className="spanLevel neon-blue">3</span>
                </div>
            </div>
        </div>
    )
}
export default CreationDiv