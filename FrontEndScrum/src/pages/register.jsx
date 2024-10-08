import RegisterForm from "../components/loginPage/register/register"
import SocialMedia from "../components/socialMedia/socialMedia"

function RegisterPage() {
    return(
    <section style={{height:500,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <RegisterForm />
        <SocialMedia />
    </section>
    )
}
export default RegisterPage