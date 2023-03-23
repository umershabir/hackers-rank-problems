## Problem : Simple Array Sum.

### Dscription:

Given an Array of integers, find the sum of its elements.

### Example:

```
let arr = [1,2,3,4]
resul = 10
```

## Explaination

I will try to explain each step.

1. Define a function which will take an argument of an integers elements array.

   > A function is a set of instruction which execute a block of code, take input and expect some result in output.

2. Define a variable to store the final result, This can be a little tricy I will explain it below.
   > "Variable is to store a value."
   > It is in good practices to define a variable with the data type you are expecting result is going to be. Example: our end result is going to be a number, So define your variable with data type of number not in string, like empty string "" it will get an unexpected behaviour.
   > Try it yourself to know.
3. Define a loop which loop over the array emelents and plus them all together.
   > Loops are handy when we want to repeat a code certain time.
4. Finally store the last value in the defined varible and return it as output.
   > return statement in function output the function's processed input.

## Solution:1

using for loop:

- The for loop in javascript as same as in C language.
  pseudocode:
  ```
  for(initializing;condition; afterCondition) {
    ..statements
  }
  ```

```
funciton simpleArraySum(arr){
    let result = 0
for(let i = 0; i < arr.lengt; i++) {
    result += arr[i]
}
    return result
}
```

## Solution:2

using for in loop:

- The for in loop in javascript is used to iterate both in arrays and object.
  pseudocode:
  ```
  for(let x in iterable){
    .statements
  }
  ```

```
funciton simpleArraySum(arr){
    let result = 0
  for (let x in arr) {
    result += arr[x];
  }
    return result
}
```

## Solution:3

using for of loop:

- The for of loop in javascript is used to iterate on iterable objects like arrays, objects and strings etc.
  pseudocode:
  ```
  for(let x of iterable){
    ...statements
     }
  ```

```
funciton simpleArraySum(arr){
    let result = 0
 for (let x of arr) {
    result += x;
  }
    return result
}
```

## Solution:4

using while loop:

- The while loop in javascript is used to execute iteration of code while the specified condition get meet.
  pseudocode:
  ```
    while(condition) {
    ...statements
     }
  ```

```
funciton simpleArraySum(arr) {
    let result = 0
    let x = 0;
    while (x < arr.length) {
    result += arr[x];
    x++;
    }
    return result
}
```

## Solution:5

using for of loop:

- The for of loop in javascript is used to iterate on iterable objects like arrays, objects and strings etc.
  pseudocode:
  ```
  for(let x of iterable){
    ...statements
     }
  ```

```
funciton simpleArraySum(arr){
    let result = 0
 for (let x of arr) {
    result += x;
  }
    return result
}
```
