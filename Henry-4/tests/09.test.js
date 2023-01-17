const todos = require('../09.js');

describe('todos', function() {
  todos();
  arreglo = [1,2,3]
  it('should return true', function() {
      expect([1,2,3].todos(function(elem) { return elem < 10; })).toBe(true);
  });
  it('should return false', function() {
    expect([1,2,3].todos(function(elem) { return elem < 2; })).toBe(false);
  });
});