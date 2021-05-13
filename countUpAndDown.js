function countUpAndDown(n) {
    console.log("going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

console.log("At the top!\nGoing down...");
for (let j = n - 1; j >= 0; j--) {
    console.log(j);
}
console.log("back down. Bye!");
}

countUpAndDown(10)


// Going up!
//  0
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  At the top!
// Going down...
//  9
//  8
//  7
//  6
//  5
//  4
//  3
//  2
//  1
//  0
//  back down. Bye!