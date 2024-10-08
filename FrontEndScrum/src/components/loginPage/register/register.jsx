import PassInput from "../input/passInput"
import UserInput from "../input/userInput"
import EmailInput from "../input/emailInput"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {useState} from "react"
function RegisterForm({}){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name:'',
        Email:"",
        Password:'',
        Password2:''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const sendToAPI = async()=>{
        try 
        {   
            const URLSend = import.meta.env.VITE_URL_USER+"Register"
            if(Object.keys(formData).length !=4) throw new Error("Se dieron valores Nulos")
            const req = await axios.post(URLSend,formData)
            navigate("/")   
        } catch (error) {
            throw new Error("Backend Error: "+ error.message)
        }
    }
    return(
<div className="divanimacion">
    <form className="form" onSubmit={(e)=>{
            e.preventDefault()
            sendToAPI()
            }}>
        <p id="heading" style={{fontSize:30}}>Register</p>
        <EmailInput handleOnChange={handleInputChange} formdata={formData}/>
        <UserInput handleOnChange={handleInputChange} formdata={formData}/>
        <PassInput handleOnChange={handleInputChange} formdata={formData.Password}/>
        <PassInput nameInp="Password2" handleOnChange={handleInputChange} formdata={formData.Password2}/>
        <div style={{marginBottom:20}} className="btn">
        <button type="submit" className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <button onClick={(e)=>{
            e.preventDefault();
        }} className="button2">Sign In</button>
        </div>
    </form>
</div>
    )
}
export default RegisterForm