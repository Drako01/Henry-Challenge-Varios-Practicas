/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pedirComida(array) {
  // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
  // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
  // (a fines practicos solo hay dieta "standard" y "vegan")
  // Por ej:
  // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
  // retorna {standard: 2, vegan: 1}
  // Tu código aca:
  arrayDietas = []

  array.forEach(i => {
    let dietas = i.dieta
    arrayDietas.push(dietas)
  })

  function contadorElemento(matrizValores, busqueda) {
    let acumulador = 0;

    for (let i = 0; i < matrizValores.length; i++) {
      if (matrizValores[i] === busqueda) {
        acumulador++;
      }
    }
    return acumulador;
  }

  return {
    'standard': contadorElemento(arrayDietas, 'standard'),
    'vegan': contadorElemento(arrayDietas, 'vegan')
  };
}

// No modifiques nada debajo de esta linea //

module.exports = pedirComida