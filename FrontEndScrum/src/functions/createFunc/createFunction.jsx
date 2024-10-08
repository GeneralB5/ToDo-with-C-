import { toast } from "react-toastify"
import axios from "axios"

const sendToast =  (msg,descr)=> toast(msg,descr)
//style:{backgroundColor:"red"}
async function sendForm(form){
try {
    if(form.Title==""||form.ExpDate==""||form.Priority==""){
        sendToast("Denied, Check if you have title, priority, exp. date",{autoClose:2000,hideProgressBar:true,className:'customToasty neon-red',style:{fontFamily:"system-ui",color:"whitesmoke"}})
        return ""
    }
    //AddToList
    const url = import.meta.env.VITE_URL_ToDo+"AddToList"
    const formReturned = await axios.post(url,form)    
    sendToast("Nice, Done well",{autoClose:2000,hideProgressBar:true,className:'customToasty neon-green',style:{fontFamily:"system-ui",color:"#000"}})  
    return formReturned.data
} catch (error) {
        throw new Error("backend error: "+error.message)
}
}
export default sendForm