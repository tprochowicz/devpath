// Calculate the number of "loops" in a number. A number has a loop when it has a closed circle when you draw it, so 6 has one loop, 1 has no loop and 8 has two loops. So 2876 has three loops

function loopsInNumber(number) {
    let arrayNumber = number.toString().split("")
    let calculateLoop = 0;
    for(let i = 0 ; i < arrayNumber.length; i++){
        if(arrayNumber[i] == 0 ||arrayNumber[i] ==  6 || arrayNumber[i] == 9) calculateLoop++
        if(arrayNumber[i] == 8) calculateLoop = calculateLoop + 2
    }

    return calculateLoop
}

module.exports = loopsInNumber;