## Problem : Grading Students

### Dscription:

HackerLand University has the following grading policy:

- Every student receives a grade in the inclusive range from 0 to 100 .
- Any less than 40 is a failing grade.

##### For Example:

```
Sample Input 0

73
67
38
33
Sample Output 0

75
67
40
33

```

## Solution:

```
// Time Conversion function
function timeConverstion(input) {
  // first I am checking string whether it has PM or AM by using one of string method indexOf() which return -1 if doesn't exist. and If we have PM then
  if (input.indexOf("PM") !== -1) {
    // remove the PM
    let pmTime = input.slice(0, -2);
    // if the hour is equal 12 then return the same string no need to change it anymore.
    if (input.slice(0, 2) === "12") {
      return console.log(pmTime);
    } else {
      // if the hour is not equals to 12 then we need to add 12 to achieve the current hour like if hour is 1 then after adding 12 it return 13 then append it with the rest of the string.
      let hours = input.slice(0, 2);
      console.log(parseInt(hours) + 12 + pmTime.slice(2));
    }
  } else if (input.indexOf("AM")) {
    // if the string has AM first remove the am part
    let amTime = input.slice(0, -2);
    if (amTime.slice(0, 2) === "12") {
      // if the string has 12 hours then we need to convert it to 00
      console.log("00" + amTime.slice(2));
      // else we can return the string as it is.
    } else return console.log(amTime);
  }
}
```
