/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function fakeBinary(size) {
  // La funcion llamada 'fakeBinary' recibe como argumento size(tamaño) que es un numero (entero)
  // y debe devolver un string de 1s y 0s con el tamaño indicado.
  // siempre empieza por 1
  // Por ej:
  // fakeBinary(10) devuelve "1010101010"
  // fakeBinary(3) devuelve "101"
  // Tu código aca:
  array = []

  if (size % 2 == 0) {
    for (let i = 0; i < size / 2; i++) {
      array.push(10)
    }
    return array.join('')
  } else if (size % 2 == 1) {
    for (let i = 0; i < parseInt(size / 2); i++) {
      array.push(10)
    }
    return array.join('') + 1
  } else {
    return 1
  }

}


// No modifiques nada debajo de esta linea //

module.exports = fakeBinary