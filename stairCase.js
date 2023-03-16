let stair =4

function stairCase(st){
    let stairCase = ''
   
       for(let j = st; j> 0; j--){
        stairCase += '#'
        console.log(' '.repeat(j)+stairCase)
    }
   
}

stairCase(stair)