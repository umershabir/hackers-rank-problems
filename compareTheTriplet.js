// the second problem is to compare the triplet.first we have to numaric arrays to compare each other.
// alice
let alice = [5, 6, 7]
// bob
let bob = [3, 6, 10]
// function
function compareTriplets(a, b) {
    let fArr = a;
    let sArr = b;
    let result = [0,0]
    // if we want to loop over the length of the arrays which is a triplet I am going to declare i which is shortform of iteration equals to 0 and less than to 3 so the values on which loop will run is 0, 1, and 2
    // when we index an array which is not present in array the answer is undefined 
    // if else was not working perfectly because the second condion is alson runing and incrementing the 1 index of the array.
    for(let i = 0; i < 3; i++){
        if(fArr[i] > sArr[i]){
            result[0] += 1 
        } else if(fArr[i] < sArr[i]) {
            result[1] += 1
        }
        
    }
    return console.log(result)
}


compareTriplets(alice, bob)

console.log(alice[3] >  bob[3])