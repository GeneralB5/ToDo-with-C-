function ErrorSession({}){
    return(
        <div style={{
        height:700,
        width:"100%",
        backgroundImage:"url(https://img.freepik.com/vector-gratis/cabeza-engranaje-pensando-hombre_98292-5238.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716768000&semt=ais_user)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        backgroundSize:'cover',
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
        }}>
            <h1 style={{    
                fontFamily: "system-ui",
                backgroundColor: "#b5a3ef",
                fontSize: 33,
                width:425,
                padding:'40px 10px',
                borderRadius:30,
                textAlign:"left",
                boxShadow:' 0 10px 30px 6px #000'
                }}>No has iniciado sesion, no puedes acceder aqui....</h1>
    
        </div>
    )
}
export default ErrorSession