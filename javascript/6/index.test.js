const sumOfArray = require('./index');

test('should return correct sum of numbers in array', () => {
  expect(sumOfArray([1,2,[3,4,[5]]])).toBe(15);
  expect(sumOfArray([1,2, [3,4, [5,6,7,8, [9,10,11,12,13]]]])).toBe(91);
});