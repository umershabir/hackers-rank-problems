## Problem : Mini Max Sum

### Dscription:

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

##### For Example:

```
input
[1 2 3 4 5]
output
10 14
```

## Solution:

```
function miniMaxSum(arrr) {
  let arr = arrr.sort((a, b) => a - b);
  let minSum = arr.slice(0, 4).reduce(function (initial, item) {
    let result = (initial += item);
    return result;
  }, 0);
  let maxSum = arr.slice(1).reduce(function (initial, item) {
    let result = (initial += item);
    return result;
  }, 0);
  return console.log(minSum + " " + maxSum);
}
```
