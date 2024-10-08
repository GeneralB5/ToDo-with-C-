import { useState } from "react"

function Levels({state,stateChange,style}){
    /// here change the state between low(1) med(2) high(3)
    const [pressed,isPressed] = useState(false)
    return(
        <div style={style} >
        <h2>Priority</h2>
        <div className="divLevels">
            <div onClick={()=>{stateChange({...state,Priority:1}),isPressed(1)}} style={pressed==1?{backgroundColor:"var(--neon",borderTopLeftRadius:20,borderBottomLeftRadius:20}:{borderTopLeftRadius:20,borderBottomLeftRadius:20}} className="levels neon-green">Low</div>
            <div onClick={()=>{stateChange({...state,Priority:2}),isPressed(2)}} style={pressed==2?{backgroundColor:"var(--neon"}:{}} className="levels neon-yellow">Medium</div>
            <div onClick={()=>{stateChange({...state,Priority:3}),isPressed(3)}} style={pressed==3?{backgroundColor:"var(--neon",borderTopRightRadius:20,borderBottomRightRadius:20}:{borderTopRightRadius:20,borderBottomRightRadius:20}} className="levels neon-red">High</div>
        </div>
        </div>
    )
}
export default Levels