// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================



const readlineSync = require("readline-sync");


function fibSequence(terms) {
    let display = "";

    if (terms >= 1) {
        display += "0 ";
    }
    if (terms >= 2) {
        display += "1 ";
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i < terms; i++) {
        let nextTerm = previous + current;
        display += nextTerm + " ";
        previous = current;
        current = nextTerm;
    }

    return display;
}


function numInFib(num) {
    let previous = 0;
    let current = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (current < num) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    return current === num;
}


function main() {
    console.log("Part A - Print First N terms");

    let termsCount = readlineSync.questionInt("\nHow many terms? ");

    if (termsCount <= 0) {
        console.log("Enter a positive integer!");
    } else {
        let sequenceResult = fibSequence(termsCount);
        console.log("Fibonacci sequence: " + sequenceResult);
    }

    console.log("\nPart B - Check if a Number Belongs to the Sequence");

    let numCheck = readlineSync.questionInt("\nEnter a number to check: ");

    if (numCheck <= 0) {
        console.log("Enter a positive integer!");
    } else {
        let checkResult = numInFib(numCheck);

        if (checkResult === true) {
            console.log(numCheck + " is a Fibonacci number.");
        } else {
            console.log(numCheck + " is NOT a Fibonacci number.");
        }
    }
}


main();