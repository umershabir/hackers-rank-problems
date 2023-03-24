## Problem : Compare the Triplet

### Dscription:

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

##### For Example:

```
let arr = [1,2,3,4]
resul = 10
```

## Explaination

I will try to explain each step.

1. Define a function which will take an argument of an integers elements array.

   > A function is a set of instruction which execute a block of code, take input and expect some result in output.

2. Define a variable to store the final result, This can be a little tricky.
   > "Variable is to store a value."
   > It is in good practices to define a variable with the data type you are expecting result is going to be. Example: our end result is going to be a number, So define your variable with data type of number not in string, like empty string "" it will get an unexpected behaviour.
   > Try it to see.
3. Define a loop which loop over the array emelents and plus them all together.
   > Loops are handy when we want to repeat a code certain time.
4. Finally store the last value in the defined varible and return it as output.
   > return statement in function output the function's processed input.

## Solution:1

##### Using for loop:

- The for loop in javascript as same as in C language. First initialize the variable which is optional we can define the variable inside or outside the for statement, second is condition for what conditions loop should work and break.
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

##### Using for in loop:

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

##### Using for of loop:

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

##### Using while loop:

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

##### Using do while loop:

- The do while loop is just like while loop, but do while loop execute at least for once and then check the condition whether its true or false.
  pseudocode:
  ```
    do {
        ...statements
    } while(condition)
  ```

```
funciton simpleArraySum(arr){
    let result = 0
 let x = 0;
  do {
    result += arr[x];
    x++;
  } while (x < arr.length);
    return result
}
```

## Solution:6

##### Using the Array method forEach():

- The forEach method run a callback function for each array item. The callback function takes three arguments current item, index of current item and the array itself.
  pseudocode:
  ```
  array.forEach(function(item, index(optional), array(optional))) {
    ...statements
  }
  ```

```
funciton simpleArraySum(arr){
    let result = 0
 arr.forEach(function (item) {
    result += item;
  });
    return result
}
```

## Solution:7

##### Using the array method map():

- The array method map is same as forEach except map method does not mutate or change the original array, It execute a callback function for each item of the array and then can return a new mutated or changed array.
  pseudocode:
  ```
    array.map(function(item, index(optional), array(optional)) {
        ...statements,
    })
  ```

```
funciton simpleArraySum(arr){
    let result = 0
 arr.map(function (item) {
    result += item;
  });
    return result
}
```

## Solution:8

##### Using the array reduce method:

- The reduce array method runs a callback function on each array element to reduce it to a one value, reducer callback function can take four arguments and it does not mutate the original array.
- The reduce method can take the initial value as its second argument.
  pseudocode:
  ```
    array.reduce(function(initialValue, item, index(optional), array(optional)) {
    ...statements,
    },intialValue(optional))
  ```

```
funciton simpleArraySum(arr){
     let result = arr.reduce(function (total, item) {
    return (total += item);
  }, 0);
    return result
}
```
