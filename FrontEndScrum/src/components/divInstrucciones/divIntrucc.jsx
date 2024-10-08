function DivIntruc(){
    return(
        <div className="divInstrucionesWrapper">
            <h2 className="neon-blue" >Instrucciones y uso</h2>
            <div className="divInstruciones" >
                <div className="divinterno neon-blue">
                    <p className="pIzquierdo">esta lista de que-haceres, esta hecha para ser simple y entendible para el usuario,consta de:</p>
                    <h4>- Prioridad</h4>
                    <h4>- Titulo (opcional descripcion)</h4>
                    <h4>- Fecha limite</h4>
                </div>
                <div className="divinterno">
                    <h3 style={{color:"var(--Target-white)"}} >00/11/2222</h3>
                    <p>ejemplo de fecha activa</p>
                    <h3 style={{color:"var(--Target-orange)"}} >00/11/2222</h3>
                    <p>1 dia restante</p>
                    <h3 style={{color:"var(--Target-red)",textDecoration:"line-through"}} >00/11/2222</h3>
                    <p>ya expiro</p>
                </div>            
            </div>
        </div>
    )
}
export default DivIntruc