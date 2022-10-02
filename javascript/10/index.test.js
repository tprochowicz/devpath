const countCurrency = require('./index');

test('should return array of cash', () => {
  expect(countCurrency(1972.78)).toEqual([
    { price: 500, count: 3 },
    { price: 200, count: 2 },
    { price: 50, count: 1 },
    { price: 20, count: 1 },
    { price: 2, count: 1 },
    { price: 0.5, count: 1 },
    { price: 0.2, count: 1 },
    { price: 0.05, count: 1 },
    { price: 0.02, count: 1 }
  ])
  expect(countCurrency(5363.26)).toEqual([
    { price: 500, count: 10 },
    { price: 200, count: 1 },
    { price: 100, count: 1 },
    { price: 50, count: 1 },
    { price: 10, count: 1 },
    { price: 2, count: 1 },
    { price: 1, count: 1 },
    { price: 0.2, count: 1 },
    { price: 0.05, count: 1 },
    { price: 0.01, count: 1 }
  ])
});


// [
//     { price: 500, count: 3 },
//     { price: 200, count: 2 },
//     { price: 50, count: 1 },
//     { price: 20, count: 1 },
//     { price: 2, count: 1 },
//     { price: 0.5, count: 1 },
//     { price: 0.2, count: 1 },
//     { price: 0.05, count: 1 },
//     { price: 0.02, count: 1 }
//   ]