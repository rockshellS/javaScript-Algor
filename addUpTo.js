//write a function that caluculates the sum of all the numbers from 1 up to (and including) some number n

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

console.log(addUpTo(6))
// this would be 21 beacuse is adding 1 + 2 + 3 + 4 + 5 + 6

// or you could code it this way

function addUpTo(n) {
    return n * (n+1) / 2
}

// this will also return 21