const sampleArr = [1, 2, 3, 4, 5, 6];
// the answer is 21

function simpleArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    sum += currentVal;
  }
  return sum;
}

console.log(simpleArraySum(sampleArr));
