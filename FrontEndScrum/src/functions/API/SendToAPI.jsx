const sendToAPI = async(root="",formData,FormKeys)=>{
    try 
    {   
        if(isNaN(FormKeys)||!formData) return "Not giving correct arguments"
        const URLSend = import.meta.env.VITE_URL_USER+root
        if(Object.keys(formData).length !=FormKeys) throw new Error("Se dieron valores Nulos")
        const req = await axios.post(URLSend,formData)
        navigate("/")   
    } catch (error) {
        throw new Error("Backend Error: "+ error.message)
    }
}
export {sendToAPI}