const cuentaPorFavor = require('../03.js');

describe('Cuenta Por Favor',function(){
  let comidas1 = [
    {
      nombre: 'pizza',
      cantidad: 6,
      precio: 5
    },
    {
      nombre: 'coca-cola',
      cantidad: 3,
      precio: 1,
    },
  ]
  let comidas2 = [
    {
      nombre: 'bife de chorizo',
      cantidad: 2,
      precio: 10
    },
    {
      nombre: 'copa de vino',
      cantidad: 2,
      precio: 3
    },
    {
      nombre: 'budin de pan',
      cantidad: '1',
      precio: 1
    }
  ]
  it('should return 33', function(){
    expect(cuentaPorFavor(comidas1)).toBe(33);
  })
  it('should return 27', function() {
    expect(cuentaPorFavor(comidas2)).toBe(27);
  })
})