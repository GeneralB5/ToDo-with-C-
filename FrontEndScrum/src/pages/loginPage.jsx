import Login from "../components/loginPage/login/login"
import SocialMedia from "../components/socialMedia/socialMedia"

function LoginPage({}) {
    return(
        <section style={{height:500,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <Login />
            <SocialMedia />
        </section>
    )
}
export default LoginPage