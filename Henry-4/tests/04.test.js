const palabraSimetrica = require('../04.js');

describe('palabraSimetrica', function() {
  it('should return true for "menem"', function() {
      expect(palabraSimetrica('menem')).toBe(true);
  });
  it('should return false for "franco"', function() {
    expect(palabraSimetrica('franco')).toBe(false);
  });
});