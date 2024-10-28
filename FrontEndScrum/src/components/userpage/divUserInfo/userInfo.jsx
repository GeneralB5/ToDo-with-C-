function UserInfo({user}){
    return(
        <div className="userinfoSuperiorDiv" >
            <div style={{
                borderRadius:"50%",
                backgroundImage:"url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center",
                backgroundSize:"cover",
                width:170,
                height:170
            }}>
            </div>     
            <div style={{gap:20,display:"flex",flexDirection:"column"}}>
                <h2 className="userH2">{user.name}</h2>
                <h2 className="userH2">{user.email}</h2>
            </div>  
        </div>
    )
}
export default UserInfo