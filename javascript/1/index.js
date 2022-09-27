// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// plusOneSum([1, 2, 3, 4]); // 14

function plusOneSum(array) {
  const sum = array.reduce((a,b) => a+b)
  return sum + array.length
}
module.exports = plusOneSum;