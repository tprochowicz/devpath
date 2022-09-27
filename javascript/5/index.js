// Write a function that returns true if one string can be formed out of another by reordering ("scrambling") the characters.
// For example:
// can_scramble("abc", "cba") -> true
// can_scramble("aab", "bba") -> false

function scramble(string1, string2) {
    return string1.split("").sort().join("") == string2.split("").sort().join("")
}  
module.exports = scramble;