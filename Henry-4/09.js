/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function todos(fn) {
  // Escribi una función llamda todos en el prototipo de Arrays,
  // que recibe una funcion (callback). Asumir que fn devuelve siempre true o false.
  // La función todos debe devolver true si fn devuelve true cuando la invocamos pasandole de a uno todos los elemento del array
  // la funcion todos debe devolver false, si algún elemento del array hace que fn devuelva false;
  // por ejemplo:
  // [1,2,3].todos(function(elem) {
  //    return elem < 10;
  //  });
  // devuelve true
  // [1,2,3].todos(function(elem) {
  //    return elem < 2;
  //  });
  // devuelve false.
}

// No modifiques nada debajo de esta linea //

module.exports = todos