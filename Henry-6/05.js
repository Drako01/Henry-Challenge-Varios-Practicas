/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ideas(array) {
  // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
  // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
  // si encontramos por lo menos una 'buena' retornamos 'Activa!'
  // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
  // Por ej:
  // ideas(['hola', 'palabra']) debe devolver 'Fail!'
  // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
  // Tu código aca:
  let resultado = []

  let total = 0

  array.forEach((i) => {
    if (i === 'buena') {
      resultado.push(1)
    } else if (i !== 'buena') {
      resultado.push(0)
    } else {
      resultado.push(4)
    }
  })

  resultado.forEach(function (a) { total += a; });

  if (total == 1 || total == 2) {
    return 'Activa!';
  } else if (total == 3) {
    return 'Jackpot!';
  } else {
    return 'Fail!';
  }

}

// No modifiques nada debajo de esta linea //

module.exports = ideas