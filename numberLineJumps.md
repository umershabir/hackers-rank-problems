## Problem : Time Conversion

### Dscription:

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

##### For Example:

```
Sample Input 0

0 3 4 2
Sample Output 0

Yes

```

## Solution:

```
// initializing the variables , this is the way to intiate multiple variables in javascrip,
let start = 7,
  end = 11,
  appleTree = 5,
  orangeTree = 15,
  apples = [-2, 2, 1],
  oranges = [5, -6]
// count apples and oranges functions accepting parameters as start distance, end distance, apple tree distance, orange tree distance and finally apples and oranges array
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // initialise the variables of inclusive apples and oranges set to intiale value zero
  let incluApples = 0,
    incluOranges = 0
  // using array method looping over item of the array and using arrow function for cleaner syntax and conditions if apple distance plus tree distance is in inclusive range then increamenting by ++ which mean increament by 1
  apples.map((item) => a + item >= s && a + item <= t && incluApples++)
  // using array method looping over item of the array and using arrow function for cleaner syntax and conditions if orange distance plus tree distance is in inclusive range then increamenting by ++ which mean increament by 1
  oranges.map((item) => b + item >= s && b + item <= t && incluOranges++)
  // printing the final number of apples and oranges.
  console.log(incluApples)
  console.log(incluOranges)
}
```
