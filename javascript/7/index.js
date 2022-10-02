// Implement the bubble sort algorithm.
function sortItems(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]) {
                let lastNumber = array[j]
                array[j] = array[j + 1];
                array[j + 1] = lastNumber;
            }
        }
    }
    return array
}
module.exports = sortItems;