const puntosDelEquipo = require('../04.js');
  
describe("puntosDelEquipo", function () {
  it("should return how many points the team earned", function () {
    let array = ["3:1", "0:1", "2:2", "1:0", "0:0"];
    expect(puntosDelEquipo(array)).toEqual(8);
  });
  it("should return how many points the team earned", function () {
    let array = ["2:1", "3:1", "1:2", "1:1", "2:0"];
    expect(puntosDelEquipo(array)).toEqual(10);
  });
  it("should return how many points the team earned", function () {
    let array = ["0:1", "2:1", "2:2", "1:0", "0:3"];
    expect(puntosDelEquipo(array)).toEqual(7);
  });
});