const crearClaseLibro = require('../06-07-08.js');
  
describe("crearClaseLibro", function () {
  it("should get the author of the book", function () {
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
    expect(libro.getAutor()).toBe("J. K. Rowling");
  });
  it("should add a new translation", function () {
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
    libro.addTraduccion("portugues", "Presença");
    expect(libro.traducciones[3]).toEqual({
      idioma: "portugues",
      editorial: "Presença",
    });
  });
});