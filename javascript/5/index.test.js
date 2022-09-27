const scramble = require('./index');

test('test the same letters', () => {
  expect(scramble("abc", "cba")).toBe(true);
  expect(scramble("abc", "bba")).toBe(false);
});