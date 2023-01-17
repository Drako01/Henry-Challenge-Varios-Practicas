const crearClaseProfesor = require('../06-07-08.js');

describe('crearClaseProfesor', function() {
  it('should return a user constructor that correctly builds user objects', function() {
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
      expect(profesor.nombre).toBe('toni');
      expect(profesor.edad).toBe(23);
      expect(profesor.cursos).toEqual(['js1', 'js2']);
      expect(profesor.certificados).toEqual([{
          nombre: 'Ingenieria',
          anio: 2004,
          entidad: 'UNT',
        }, {
          nombre: 'Master en Datos',
          anio: 2012,
          entidad: 'UBA'
        }]);
  });

  it('should add a Certficado with addCertificado', function() {
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
      profesor.addCertificado('Machine Learning','Coursera',2013);
      expect(profesor.certificados[2]).toEqual({
          nombre: 'Machine Learning',
          anio: 2013,
          entidad: 'Coursera',
        });
  });
});