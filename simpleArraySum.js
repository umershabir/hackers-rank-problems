// function simpleArraySum(arr) {
//   let result = 0;

//   return console.log(result, typeof result);
// }
function simpleArraySum(arr) {
  let result = arr.reduce(function (total, item) {
    return (total += item);
  }, 0);
  return console.log(result, typeof result);
}
let array = [1, 2, 3, 4];
simpleArraySum(array);
