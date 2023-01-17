const ideas = require('../05.js');
  
describe("ideas", function () {
  it("should return a string depending on the condition", function () {
    expect(ideas(["hola", "frase", "nada"])).toEqual("Fail!");
  });
  it("should return a string depending on the condition", function () {
    expect(ideas(["buena", "short", "words", "hi"])).toEqual("Activa!");
  });
  it("should return a string depending on the condition", function () {
    expect(
      ideas(["buena", "short", "buena", "words", "buena", "hi"])
    ).toEqual("Jackpot!");
  });
});