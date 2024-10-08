function DescriptionAndT({form,useDescript,style}){
    //title & desc
    return(
    <div style={style}>
        <h2 className="h2Descr">Title</h2>
        <input onChange={(e)=>{useDescript({...form,Title:e.target.value})}} className="titleInput neon-blue" type="text" placeholder=" Title"/>
        <h2 className="h2Descr" >Description</h2>
        <textarea onChange={(e)=>{useDescript({...form,Description:e.target.value})}} style={{resize:"none",overflowY:"auto",overflow:"auto",width:200,height:100,boxSizing:"border-box",paddingTop:2,lineHeight:1,wordWrap:"break-word"}} className="descrInput neon-blue" type="text" placeholder=" description"/>
    </div>)
}
export default DescriptionAndT