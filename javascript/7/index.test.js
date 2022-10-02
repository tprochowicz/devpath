const sortItems = require('./index');

test('should be sorted array', () => {
  expect(sortItems([4,3,7,2,10,4])).toEqual([2, 3, 4, 4, 7, 10]);
  expect(sortItems([10,30,5,2,14,55,24,1,4,2])).toEqual([1,2,2,4,5,10,14,24,30,55]);
});