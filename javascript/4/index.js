// Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

function longestWord(string) {
    let arrayString = string.split(" ")
    if(arrayString.length == 0) return []

    let words = []
    let sortedString = arrayString.sort((a,b) => {
        return b.length - a.length
    })

    for (let i = 0; i < sortedString.length; i++) {
        if (sortedString[0].length == sortedString[i].length && !words.includes(sortedString[i].toLowerCase())) {
            words.push(sortedString[i].toLowerCase())
        }
    }
    return words
  }
module.exports = longestWord;