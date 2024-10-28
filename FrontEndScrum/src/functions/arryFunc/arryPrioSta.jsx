function encontrarMayorPrioridad(objeto) {
  let maxPrio = -Infinity;
  let elementoConMayorPrio;

 
  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      const valor = objeto[clave];
      if (valor.prio > maxPrio) {
        maxPrio = valor.prio;
        elementoConMayorPrio = valor;
      }
    }
  }

  return elementoConMayorPrio;
}

function crearArrayNumericoConsecutivo(maxPrio) {
  return Array.from({ length: maxPrio }, (_, i) => i + 1);
}

function separarPorPrioridad(array) {
    const resultado = {
      1: { prio: 0, text: 'low', color: 'green' },
      2: { prio: 0, text: 'mid', color: 'yellow' },
      3: { prio: 0, text: 'high', color: 'red' }
    };
  
    array.forEach(elemento => {
      resultado[elemento.priority].prio++;
    });
  
    const maxTick = encontrarMayorPrioridad(resultado);
    
    return {arryResult:Object.values(resultado),arryNumbers:crearArrayNumericoConsecutivo(maxTick.prio)};
  }

  
export {separarPorPrioridad , crearArrayNumericoConsecutivo}