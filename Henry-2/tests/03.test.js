const fakeBinary = require('../03.js');
  

describe("fakeBinary", function () {
  it("should return a string with 1s and 0s acording to the size", function () {
    expect(fakeBinary(7)).toEqual("1010101");
  });
  it("should return a string with 1s and 0s acording to the size", function () {
    expect(fakeBinary(11)).toEqual("10101010101");
  });
});