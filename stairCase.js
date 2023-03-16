// staircase algorithm
//first I declared a variable for how much length we want in our stairs
let stair =4
// this is the function of staircase
function stairCase(st){
    // let staircase assign to empty string
    let stairCase = ''
    let space = ' '
    //initiate a loop which valu is set for equal to our  stairs length, 
       for(let j = st -1; j >= 0; j--){
        stairCase += '#'
        console.log(space.repeat(j)+stairCase)
    }
}

stairCase(stair)