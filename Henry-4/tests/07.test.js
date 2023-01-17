const crearClaseProfesor = require('../06-07-08.js');

describe('crearClaseProfesor', function() {
  it('should add a Curso with addCurso', function() {
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
      profesor.addCurso('js3');
      expect(profesor.cursos[2]).toBe('js3');
  });
  it('should get all cursos with getCursos', function() {
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
    expect(profesor.getCursos()).toEqual(['js1','js2']);
  });
});