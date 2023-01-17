const buscandoAWally = require('../01.js');
  
describe("buscandoAWally", function () {
  it(`should return Wally's position on the array `, function () {
    expect(
      buscandoAWally(["Harry", "Luna", "Wally", "Ron", "Hermione"])
    ).toEqual("Encontre a Wally en la posicion 2");
  });
  it(`should return Wally's position on the array `, function () {
    expect(
      buscandoAWally([
        "Harry",
        "Luna",
        "Dobby",
        "Ron",
        "Hermione",
        "Fred",
        "Ginny",
        "Wally",
      ])
    ).toEqual("Encontre a Wally en la posicion 7");
  });
  it(`should return Wally's position on the array `, function () {
    expect(
      buscandoAWally(["Harry", "Luna", "Ron", "Hermione", "Ginny", "Wally"])
    ).toEqual("Encontre a Wally en la posicion 5");
  });
});