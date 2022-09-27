const reverseWords = require('./index');

test('test reverse words', () => {
  expect(reverseWords("Interviews are awesome!")).toBe("awesome! are Interviews");
  expect(reverseWords(" CS degree")).toBe("degree CS");
  expect(reverseWords("CS degree ")).toBe("degree CS");
});