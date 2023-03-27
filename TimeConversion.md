## Problem : Birthday Cake Candles

### Dscription:

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

The maximum height candles are units high. There are of them, so return .

##### For Example:

```
input
[3 2 1 3]
output
2 //Candle heights are 3. The tallest candles are  units, and there are 2 of them.

```

## Solution:

```
// declare a function which will take input as an array
function highestCandle(arr) {
  // declare a variable to find the maximum value in the array by using math max function in javascript.
  let max = Math.max(...arr);
  // then to find the maximum value repeated in the array by using the filter method which will filter the array by max value repeaded
  let highest = arr.filter((a) => a == max);
  // finally return the length of the repeated highest value in the array
  return highest.length;
}
```
