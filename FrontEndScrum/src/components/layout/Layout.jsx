import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

function Layout({children}){

    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}
export default Layout