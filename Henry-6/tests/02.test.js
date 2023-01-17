const vegan = require('../02.js');
  

let invitados = {
  Luna: {
    vegan: false,
  },
  Sebas: {
    vegan: false,
  },
  Marce: {
    vegan: false,
  },
  Nicky: {
    vegan: true,
  },
};

let invitados2 = {
  Luna: {
    vegan: true,
  },
  Sebas: {
    vegan: false,
  },
  Marce: {
    vegan: false,
  },
  Nicky: {
    vegan: true,
  },
};

describe("vegan", function () {
  it("should return the amount of vegan guests", function () {
    expect(vegan(invitados)).toBe(1);
  });
  it("should return the amount of vegan guests", function () {
    expect(vegan(invitados2)).toBe(2);
  });
});
