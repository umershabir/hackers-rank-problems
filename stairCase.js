let stair =4

function stairCase(st){
    let stairCase = ''
    for(let j = st; j > 0; j--){
        let space = ' '.repeat(j)   
        for(let i = 0; i < st; i++) {
            stairCase  += '#'
        }
        console.log(space+stairCase)
    }
    
}

stairCase(stair)