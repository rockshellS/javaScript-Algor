//Big O Definition


// we say that an algorithm is O(f(n)) if the number of simple operations the computer
// has to do is eventually less than a constant times f(n), as n increases


                        // this notation below just means a function with an input of n (f(n) and then the output =n) 
                        //so we are discribing the relationship between the input and the run time

// * f(n) could be linear (f(n)) = n)
// linear meaning as n scales the input the run time scales as well

                                    // this is n squared
// * f(n) could be quadratic (f(n) = n2)
// where n grows the run time squares related to the square event




// * f(n) could be constant )f(n) =1)
// as n grows it doesn't really have an impact because runtime is always constant which we simplify down to one 


// * f(n) could be something entirely different!



//examples 
// O(2n)  would be O(n)
// O(500) would be O(1)
// O(13n*n) would be O(n*n)



// Big O shorthands
// 1. Arithmetic operations are contant



// 2. Variable assignments is contant



// 3. Accessing elements in an array (by index) or object(by key) is contant



// 4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop



//