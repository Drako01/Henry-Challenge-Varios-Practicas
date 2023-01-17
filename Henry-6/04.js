/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function puntosDelEquipo(array) {
  // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  // en este formato ["3:1", "2:2", "0:1", ...]
  //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  //que su resultado es el primero en cada string
  // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  // Tu código aca:


  let resultado = []

  let total = 0

  array.forEach((i) => {
    if (i[0] > i[2]) {
      resultado.push(3)
    } else if (i[0] == i[2]) {
      resultado.push(1)
    } else {
      resultado.push(0)
    }
  })
  
  resultado.forEach(function (a) { total += a; });
  return total;

}

// No modifiques nada debajo de esta linea //

module.exports = puntosDelEquipo