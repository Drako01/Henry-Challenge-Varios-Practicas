const masFrecuente = require('../02.js');

describe('masFrecuente', function() {
  it('should return 9 for [2,4,9,9]', function() {
      expect(masFrecuente([2,4,9,9])).toBe(9)
  })
  it('should return 3 for [3,2,3,2,3,3,3]', function() {
    expect(masFrecuente([3,2,3,2,3,3,3])).toBe(3)
  })
  it('should return 5 for [5,5]', function() {
    expect(masFrecuente([5,5])).toBe(5)
  })
})