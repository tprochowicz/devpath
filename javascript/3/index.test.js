const reverse = require('./index');

test('test reverse string', () => {
  expect(reverse("hello world")).toBe("dlrow olleh");
  expect(reverse("Ala ma kota")).toBe("atok am alA");
});