const crearClaseLibro = require('../06-07-08.js');
  
describe("crearClaseLibro", function () {
  it("should return a book constructor that correctly builds book objects", function () {
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
    expect(libro.titulo).toBe("Harry Potter y la piedra filosofal");
    expect(libro.autor).toBe("J. K. Rowling");
    expect(libro.traducciones).toEqual([
      
        { idioma: "inglés", editorial: "Scholastic" },
        { idioma: "castellano", editorial: "emece" },
        { idioma: "francés", editorial: "Éditions Gallimard" },
      
    ]);
  });
  it("should get the title with getTitulo", function () {
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
    expect(libro.getTitulo()).toBe("Harry Potter y la piedra filosofal");
  });
});