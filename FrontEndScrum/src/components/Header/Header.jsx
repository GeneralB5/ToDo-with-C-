import logoPrincipal from "../../assets/Icon/ToDoList.png"
function Header(){
    return(
        <header className="header_layout">
            <div>
                <img style={{
                    borderRadius:"50%",
                    border:" 1px solid darkslategray"
                }} src={logoPrincipal} alt="LogoPrincipal" width={60} height={60} />
            </div>
        </header>
    )
}
export default Header