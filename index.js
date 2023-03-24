let numbers = [1, 2, 3, 4, 5];

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

miniMaxSum(numbers);
