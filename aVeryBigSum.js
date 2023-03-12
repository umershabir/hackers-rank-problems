// write the function that will take an array of integers as input and return the array of sum all of the integers
let integersArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(arr) {
    let result = 0
    for(let i =0; i < arr.length; i++) {
        result += arr[i]
    }
    return console.log([result])
}

aVeryBigSum(integersArr)