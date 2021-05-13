function printAllPairs(n) {
    for (var i = 0; i < n; n++) {
        for (var j = 0; j < n; j++) {
            console.log(i,j);
        }
    }
}

// this is a nest loop 
// i we plug in 5 it's going to print every pair of the numbers 0 to 5
// so it's gonna 00 01 02 all the way 55


// talking about the Big O here 
// the first loop as n grows would be O(n)
// then we have a nested loop which is the same thing O(n) which just means 
//      that as n grows this loop the number of times it runs grows as well
// But this is NOT O of 2n which simplifies 2 of n because it's nested. And that gives us something else
//          an O(n) operation instead of O(n) operation is O(n squared)
//          so what this means is that as n grows the runtime roughly grows at the rate of n squared