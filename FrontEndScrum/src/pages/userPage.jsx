import { useContext, useEffect, useState } from "react"
import DivContainerStadSup from "../components/userpage/divSupUser/divSta"
import UserInfo from "../components/userpage/divUserInfo/userInfo"
import { UserContext } from "../Context/Context"
import { useNavigate } from "react-router-dom";
import SpinnerLoad from "../components/Loading/loadingSpinner";

function UserPage({}){
const navigate = useNavigate();
const {valoresUser}=useContext(UserContext)
const [loading, setLoading] = useState(true)
useEffect(()=>{
    if(valoresUser == null) navigate("/error/session")
    return(
        setLoading(false)
    )
},[])
    if(loading==true){
     return <SpinnerLoad />
    }
    return(
        <section className="sectionUserPage">
            <UserInfo user={valoresUser}/>
            <div className="divWrapperUserPage"  style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                gap:50
            }}>
                <DivContainerStadSup TODOLIST={valoresUser.toDoList} />
                <div className="divInferiorUserPage" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
                    <h2>Coming soon...</h2>
                </div>
            </div>
        </section>
    )
}
export default UserPage