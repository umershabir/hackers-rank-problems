// function simpleArraySum(arr) {
//   let result = 0;

//   return console.log(result, typeof result);
// }
function simpleArraySum(arr) {
  let result = 0;
  let x = 0;
  while (x < arr.length) {
    result += arr[x];
    x++;
  }
  return console.log(result, typeof result);
}
let array = [1, 2, 3, 4];
simpleArraySum(array);
