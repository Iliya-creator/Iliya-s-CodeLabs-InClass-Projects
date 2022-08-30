// Exercise #2: Intermediate
// Aim: Create a function that returns the number of true values in an array.

// Examples

// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0
// Notes

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).


function countTrue(arr) {
    if (arr.length === 0){
        return console.log(0);
    } else {
        let t = 0;
        arr.forEach(element => {
            if (element === true) {t++};
        });
        return console.log(t);
    }
}


countTrue([true, false, false, true, false, true, false, false, true, false]);    //➞    4

countTrue([false, false, false, false, true, false, false, true, false]);         //➞    2

countTrue([]);                                   //➞    0