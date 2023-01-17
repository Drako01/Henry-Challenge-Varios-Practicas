const crearClaseProfesor = require('../06-07-08.js');

describe('crearClaseProfesor', function() {
  it('should get number of certificados with getCertificados', function() {
    const Profesor = crearClaseProfesor();
    const profesor = new Profesor('toni', 23, ['js1', 'js2'],
        [{
          nombre: 'Ingenieria',
          anio: 2004,
          entidad: 'UNT',
        }, {
          nombre: 'Master en Datos',
          anio: 2012,
          entidad: 'UBA'
        }]);
    expect(profesor.getCertificados()).toEqual(2);
  });
  it('should get the last Certificado with getUltimoCertificado', function() {
    const Profesor = crearClaseProfesor();
    const profesor = new Profesor('toni', 23, ['js1', 'js2'],
        [{
          nombre: 'Ingenieria',
          anio: 2004,
          entidad: 'UNT',
        }, {
          nombre: 'Master en Datos',
          anio: 2012,
          entidad: 'UBA'
        }]);
    expect(profesor.getUltimoCertificado()).toStrictEqual({
          nombre: 'Master en Datos',
          anio: 2012,
          entidad: 'UBA'
        });
  });
});