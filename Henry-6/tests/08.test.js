const crearClaseLibro = require('../06-07-08.js');
  
describe("crearClaseLibro", function () {
  it("should get all the lenguages that the book is on", function () {
    const Libro = crearClaseLibro();
    const libro = new Libro(
      "Harry Potter y la piedra filosofal",
      "J. K. Rowling",
      [
        { idioma: "inglés", editorial: "Scholastic" },
        { idioma: "castellano", editorial: "emece" },
        { idioma: "francés", editorial: "Éditions Gallimard" },
      ]
    );
    expect(libro.getTraducciones()).toEqual([
      "inglés",
      "castellano",
      "francés",
    ]);
  });
  it("should get full name with getFullName", function () {
    const Libro = crearClaseLibro();
    const libro = new Libro(
      "Harry Potter y la piedra filosofal",
      "J. K. Rowling",
      [
        { idioma: "inglés", editorial: "Scholastic" },
        { idioma: "castellano", editorial: "emece" },
        { idioma: "francés", editorial: "Éditions Gallimard" },
      ]
    );
    expect(libro.getAlcance()).toBe(3);
  });
});