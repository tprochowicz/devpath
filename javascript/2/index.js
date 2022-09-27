// Given an input string, reverse all the words. To clarify, input: "Interviews are awesome!" output: "awesome! are Interviews". Consider all consecutive non-whitespace characters as individual words. If there are multiple spaces between words reduce them to a single white space. Also remove all leading and trailing whitespaces. So, the output for " CS degree", "CS degree", "CS degree ", or " CS degree " are all the same: "degree CS".

function reverseWords(string) {
    const reverseString = string.split(" ").reverse().map((word) => word.trim()).filter((word) => word.length > 0)
    return reverseString.join(" ")
}

module.exports = reverseWords;