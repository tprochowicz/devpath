const primeNumber = require('./index');

test('should return if number is prime', () => {
  expect(primeNumber(17389)).toEqual(true);
  expect(primeNumber(1)).toEqual(false);
  expect(primeNumber(3)).toEqual(true);
});