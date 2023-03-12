// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
let ar = [-4, 3, -9, 0, 4, 1]
//
function minusPlus(arr) {
    let result = []
    let zero = 0;
    let zeroRatio = 0;
    let positive = 0;
    let positiveRatio = 0;
    let negative = 0;
    let negativeRatio = 0;
 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            zero ++
           zeroRatio =  (zero/arr.length).toFixed(6)
          
        } 
        if(Math.sign(arr[i]) == 1) {
            positive ++
            positiveRatio = (positive/arr.length).toFixed(6)
        }
        if(Math.sign(arr[i]) == -1) {
            negative ++
            negativeRatio = (negative/arr.length).toFixed(6)
        }
        
    }
    return console.log(positiveRatio, zeroRatio, negativeRatio)
}


minusPlus(ar)