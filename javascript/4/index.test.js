const longestWord = require('./index');

test('get longest words', () => {
  expect(longestWord("You are just an old antidisestablishmentarian")).toEqual(["antidisestablishmentarian"])
  expect(longestWord("I gave a present to my parents")).toEqual(["present", "parents"])
  expect(longestWord("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")).toEqual(["buffalo"])
});