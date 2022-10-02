const loopsInNumber = require('./index');

test('should return correct loops in number', () => {
  expect(loopsInNumber(2876)).toBe(3);
  expect(loopsInNumber(88888)).toBe(10);
});