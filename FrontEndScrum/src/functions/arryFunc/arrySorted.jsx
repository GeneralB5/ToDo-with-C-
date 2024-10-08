import moment from "moment"
function sortByProp(data, criterios) {
    return data.sort((a, b) => {
      for (const { prop, orden } of criterios) {
        if (prop === 'expDate') {
            const dateA = moment(a.expDate, 'YYYY-MM-DD');
            const dateB = moment(b.expDate, 'YYYY-MM-DD');
    
            const result = orden === 'desc' ? dateB.diff(dateA) : dateA.diff(dateB);
            if (result !== 0) return result;
        } else {
          const result = orden === 'desc' ? b[prop] - a[prop] : a[prop] - b[prop];
          if (result !== 0) return result;
        }
      }
      return 0;
    });
  }
export default sortByProp

//Exp
// criterios: Un array de objetos, donde cada objeto tiene dos propiedades:
//      prop: La propiedad por la que se quiere ordenar.
//      orden: El orden de la comparación ('asc' o 'desc').
// const criterios = [
//     { prop: 'prio', orden: 'desc' }, // priority (ambos o solo)
//     { prop: 'date', orden: 'asc' }  //  date (ambos o solo)
// ];

