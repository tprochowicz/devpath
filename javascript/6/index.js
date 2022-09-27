// Calculate the sum of an array which contains integers and other arrays with integers. For example:

function sumOfArray(array) {
    return array.flat(Infinity).reduce((a,b) => a + b)
}  

module.exports = sumOfArray;