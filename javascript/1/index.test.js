const plusOneSum = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(plusOneSum([1,2,3,4])).toBe(14);
  expect(plusOneSum([5,5,5,5,5])).toBe(30);
});