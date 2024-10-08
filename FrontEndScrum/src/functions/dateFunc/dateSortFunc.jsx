function parseDate(dateString) {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); 
} 
function sortedArry(data){
    data.sort((a, b) => parseDate(a.dateExp) - parseDate(b.dateExp));
}     
      
export default sortedArry


