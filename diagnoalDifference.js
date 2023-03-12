//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal = 1+5+9 =15 . The right to left diagonal = 3+5+9=17. 

//Their absolute difference is 15-17 = 2

let ar = [[1,2,3],[4,5,6],[9,8,9]]
let arrr = [[11, 2 ,4],
   [ 4, 5, 6],
    [10 ,8 ,-12]]
// algorithm
function digonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    for(let i = 0; i < arr.length; i++) {
     
      leftToRight += arr[i][i]
      rightToLeft += arr[i][arr[i].length - 1 - i]
      
    }
    return console.log(Math.abs( rightToLeft - leftToRight))
}

digonalDifference(arrr)