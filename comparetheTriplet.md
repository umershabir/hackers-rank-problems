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
input
[5 6 7]
[3 6 10]
output
[1 1]
```

## Explaination

1. Define a function with two parameters can take two arrays.
2. Inside the function declare two variables named aliceScore and bobScore and valued them with intial value 0.
3. Iterate a loop over three time to check if alice is score greater than bob give one point to alice else give a point to bob.
4. Finally return an array containing bob and alice score variables.

## Solution:

- The for loop in javascript as same as in C language. First initialize the variable which is optional we can define the variable inside or outside the for statement, second is condition for what conditions loop should work and break.
  pseudocode:
  ```
  for(initializing;condition; afterCondition) {
    ..statements
  }
  ```

```
let alice = [5, 6, 7]
let bob = [3, 6, 10]
function compareTriplets(a, b) {
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
           aliceScore++
        } else if(a[i] < b[i]) {
            bobScore++
        }
    }

    return [aliceScore, bobScore]
}
```
