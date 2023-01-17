const pedazos = require('../05.js');

describe('pedazos', function() {
  it('should return [[1,2],[3,4],[5]]', function() {
    expect(pedazos([1,2,3,4,5], 2)).toStrictEqual([[1,2], [3,4], [5]]);
  });
  it('should return [[1,2,3,4],[5]]', function() {
    expect(pedazos([1,2,3,4,5], 4)).toStrictEqual([[1,2,3,4], [5]]);
  });
  it('should return [[1,2]]', function() {
    expect(pedazos([1,2], 4)).toStrictEqual([[1,2]]);
  });
})