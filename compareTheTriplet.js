// the second problem is to compare the triplet.first we have to numaric arrays to compare each other.
// alice
let alice = [5, 6, 7]
// bob
let bob = [3, 6, 10]
// function
function compareTriplets(a, b) {
   
    //
    // i got the second approch is 
    // we can declare alice and bob variables like 
    let aliceScore = 0;
    let bobScore = 0;
    // if we want to loop over the length of the arrays which is a triplet I am going to declare i which is shortform of iteration equals to 0 and less than to 3 so the values on which loop will run is 0, 1, and 2
    // when we index an array which is not present in array the answer is undefined 
    // if else was not working perfectly because the second condion is alson runing and incrementing the 1 index of the array.
    // so I add an other condition in the loop 
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
           aliceScore++
        } else if(a[i] < b[i]) {
            bobScore++
        }
        
    }
 
    return console.log([aliceScore, bobScore])
}

compareTriplets(alice, bob)