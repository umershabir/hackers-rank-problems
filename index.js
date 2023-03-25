let birthdayCandles = [4, 4, 3, 2];
// declare a function which will take input as an array
function highestCandle(arr) {
  // declare a variable to find the maximum value in the array by using math max function in javascript.
  let max = Math.max(...arr);
  // then to find the maximum value repeated in the array by using the filter method which will filter the array by max value repeaded
  let highest = arr.filter((a) => a == max);
  // finally return the length of the repeated highest value in the array
  return highest.length;
}
//
highestCandle(birthdayCandles);
