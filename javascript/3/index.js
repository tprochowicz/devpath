// Given a string, write a function that reverses the characters. E.g. Input "hello world" --> Output "dlrow olleh"

function reverse(string) {
    return string.split("").reverse().join("")
  }

reverse("hello world")
module.exports = reverse;