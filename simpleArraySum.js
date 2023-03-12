// Given an array of integers, find the sum of its elements.
// For example, if the array , , so return .

// a function which will take an array of numbers and sum that numbers
function simpleArraySum(arr) {
  // first I use an empty string for result that signifies result data type as string and when I add a string to a number it result a string now I initiate the result with null so it's data type is object which is an error in javascript so if I dont want to set the data type of result to an error data type I am going to set it an undefined there is difference between undefined and empty string.However this is a good practice you should initate a variable with it's ending type of data type. like if you know the end data type of result is going to be number it is in good practice to initalize the value of the vairable to number data type. but when you initialilze variable with null it consider in javascript as falsy which is a 0 value and zero represent a number so 0 += 1 get the result what you expected to be.
  let result = undefined
  // let result = null
  for (let i = 0; i < arr.length; i++) {
    // if we use += sign javascript automatically convert it into string
    result += arr[i]
  }
  return console.log(result, typeof result)
}
let array = [1, 2, 3, 4]
simpleArraySum(array)
