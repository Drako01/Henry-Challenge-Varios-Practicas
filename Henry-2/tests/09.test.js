const repetirCaracteres = require('../09.js');
  
describe("repetirCaracteres", function () {
  repetirCaracteres();
  it('should return "hhoollaa"', function () {
    expect("hola".repeatCharacters()).toBe("hhoollaa");
  });
  it('should return "hheennrryy"', function () {
    expect("henry".repeatCharacters()).toBe("hheennrryy");
  });
});