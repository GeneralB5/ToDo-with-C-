import PassInput from "../input/passInput"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import EmailInput from "../input/emailInput";
import { UserContext } from "../../../Context/Context";
function Login({}){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Email:'',
        Password:'',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const {valoresUser,SetUser} = useContext(UserContext)
      const sendToAPI = async(e)=>{
        try 
        {   
            const URLSend = import.meta.env.VITE_URL_USER+"Login"
            if(Object.keys(formData).length !=2) throw new Error("Se dieron valores Nulos")
            const req = await axios.post(URLSend,formData,{
                baseURL:import.meta.env.VITE_BASEURL,
                withCredentials:true
            })
            SetUser(req.data)
            navigate("/ToDo")   
        } catch (error) {
            throw new Error("Backend Error: "+ error.message)
        }
    }
    return(
<div className="divanimacion">
    <form className="form" onSubmit={(e)=>{
        e.preventDefault()
        sendToAPI(e)
        }}>
        <p id="heading" style={{fontSize:30}}>Login</p>
        <EmailInput handleOnChange={handleInputChange} formdata={formData} />
        <PassInput handleOnChange={handleInputChange} formdata={formData.Password}/> 
        <div className="btn">
        <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <button onClick={(e)=>{
            e.preventDefault()
            navigate("/register")
            }} className="button2">Sign Up</button>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <button className="button3">Forgot Password</button>
        </div>
    </form>
</div>
    )
}
export default Login