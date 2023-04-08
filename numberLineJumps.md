## Problem : Number Line Jumps

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
// initialize a function whict will accept x1, v1, x2,v2 as a paramerters
function numberLineJump(x1, v1, x2, v2){
if(v1 > v2){
  if(x2 -x1 % v1-v2 === 0) {
    return "YES"
  }
}else return "NO"
}
```
