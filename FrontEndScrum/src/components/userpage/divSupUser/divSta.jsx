import MountainChart from "./stadistics/stadistics"
function DivContainerStadSup({TODOLIST}){
    return(
        <div className="divSuperiorUserPage">
            <div className="glassEffect" style={{
                position:'absolute',
                width:'inherit',
                height:'inherit',
                zIndex:1,
                
            }}></div>
                <MountainChart List={TODOLIST}/>
        </div>
    )
}
export default DivContainerStadSup