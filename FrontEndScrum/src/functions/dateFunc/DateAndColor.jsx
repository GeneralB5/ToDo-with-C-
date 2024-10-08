function divideDateAndColor(d){
    const date = new Date()
    //yyyy
    if(parseInt(d[0]+d[1]+d[2]+d[3]) < date.getFullYear())return "red"
    //mm
    const monthOfDate = date.getMonth()>=10?date.getMonth():"0"+String((date.getMonth()+1))
    if(parseInt(d[5]+d[6]) != monthOfDate) return d[3]+d[4]>monthOfDate? "white":"red"
    //dd
    if(parseInt(d[8]+d[9]) <= date.getDate()) return parseInt(d[8]+d[9])==date.getDate()?"orange":"red"
    return "white"
}
export default divideDateAndColor