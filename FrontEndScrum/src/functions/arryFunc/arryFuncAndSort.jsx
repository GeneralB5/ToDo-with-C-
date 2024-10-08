function agruparElementos(array, tamañoGrupo) {
    const resultado = [];
    let grupoTemporal = [];
  
    for (let i = 0; i < array.length; i++) {
      grupoTemporal.push(array[i]);
  
      if (grupoTemporal.length === tamañoGrupo || i === array.length - 1) {
        resultado.push([...grupoTemporal]);
        grupoTemporal = [];
      }
    }
  
    return resultado;
  }
export default agruparElementos