// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================



const readlineSync = require("readline-sync");


function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}


function average(arr) {
    let numSum = sum(arr);
    let result = numSum/arr.length;
    return result;
}


function maximum(arr) {
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        } 
    }

    return maxValue;
}


function minimum(arr) {
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    } 

    return minValue;
}


function main() {
    let count = readlineSync.questionInt("How many numbers? ");
    const nums = [];

    if (count <= 0) {
        console.log("Number must be a positive integer!");
        return;
    }

    for (let i = 0; i < count; i++) {
        let num = readlineSync.questionInt(`Enter number ${i+1}: `);
        nums.push(num);
    }

    let sumResult = sum(nums);
    let avgResult = average(nums);
    let maxResult = maximum(nums);
    let minResult = minimum(nums);

    console.log("\nResults:");

    console.log(`Sum:     ${sumResult}`);
    console.log(`Average: ${avgResult}`);
    console.log(`Maximum: ${maxResult}`);
    console.log(`Minimum: ${minResult}`);
}


main();