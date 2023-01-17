const soloStrings = require('../01.js');

describe('soloStrings', function() {
  it('should return ["Henry", "Toni"] for [1, "Henry", 2, "Toni"]', function() {
    expect(soloStrings([1, 'Henry',2, 'Toni'])).toStrictEqual(['Henry', 'Toni']);
  });
  it('should return ["Soy", "Henry"] for [1, "Soy", 3, "Henry", 2]', function() {
    expect(soloStrings([1,'Soy', 3, 'Henry', 2])).toStrictEqual(['Soy', 'Henry']);
  });
});