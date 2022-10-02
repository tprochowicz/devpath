// Write a function that returns the number of each cash-unit that fits into the given input by achieving the smallest denomination.

// Given cash units are:

// 500
// 200
// 100
// 50
// 20
// 10
// 5
// 2
// 1
// 0.5
// 0.2
// 0.1
// 0.05
// 0.02
// 0.01


function countCurrency(amount)
{
    let result = [];
    let money = [
        {
            price: 500,
            count: 0
        },
        {
            price: 200,
            count: 0
        },
        {
            price: 100,
            count: 0
        },
        {
            price: 50,
            count: 0
        },
        {
            price: 20,
            count: 0
        },
        {
            price: 10,
            count: 0
        },
        {
            price: 5,
            count: 0
        },
        {
            price: 2,
            count: 0
        },
        {
            price: 1,
            count: 0
        },
        {
            price: 0.5,
            count: 0
        },
        {
            price: 0.2,
            count: 0
        },
        {
            price: 0.1,
            count: 0
        },
        {
            price: 0.05,
            count: 0
        },
        {
            price: 0.02,
            count: 0
        },
        {
            price: 0.01,
            count: 0
        },
    ]
    for (let i = 0; i < money.length; i++) {
        if (amount >= money[i].price) {
            money[i].count = Math.floor(amount / money[i].price) 
            amount = amount % money[i].price
        }
    }  
    for (let i = 0; i < money.length; i++) {
        if (money[i].count != 0) {
            result.push({price: money[i].price, count: money[i].count})
        }
    }

    return result
}

module.exports = countCurrency;