// Warm Up Exercise
// Given the defined function

// function findWaldo(group) {

// }
// This function will return a new array. Every string of the array that equals 'Waldo', replace that with Found Waldo!. For example,

// findWaldo(['Stacy', 'Waldo', 'John']) // returns ['Stacy', 'Found Waldo!', 'John']
// findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']) // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']

function findWaldo(group) {
    let newArr = [];

    for(let i = 0; i < group.length; i++){
        if (group[i] === "Waldo"){
            newArr.push("Found Waldo!");
        } else{
            newArr.push(group[i]);
        }
    }
    return newArr;
}

console.log(findWaldo(['Stacy', 'Waldo', 'John'])) // returns ['Stacy', 'Found Waldo!', 'John']
console.log(findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo'])) // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']
