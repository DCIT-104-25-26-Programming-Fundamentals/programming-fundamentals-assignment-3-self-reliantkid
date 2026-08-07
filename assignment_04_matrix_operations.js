// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');


function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let input = readlineSync.question(`Enter row ${i + 1}: `);
        let row = input.trim().split(/\s+/).map(Number);
        matrix.push(row);
    }
    return matrix;
}


function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}


function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }

    return transposed;
}


function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }

    return result;
}


function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}


function main() {
    console.log("PART A: Transpose a Matrix");
    let rowsA = readlineSync.questionInt("Enter number of rows: ");
    let colsA = readlineSync.questionInt("Enter number of columns: ");
    
    let matrixA = readMatrix(rowsA, colsA);

    console.log("\nOriginal Matrix:");
    printMatrix(matrixA);

    let transposed = transposeMatrix(matrixA);
    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    console.log("\nPART B: Add Two Matrices");
    let rowsB = readlineSync.questionInt("Enter number of rows: ");
    let colsB = readlineSync.questionInt("Enter number of columns: ");

    console.log("\nEnter Matrix 1:");
    let matB1 = readMatrix(rowsB, colsB);

    console.log("\nEnter Matrix 2:");
    let matB2 = readMatrix(rowsB, colsB);

    let sumMatrix = addMatrices(matB1, matB2);
    console.log("\nSum Matrix:");
    printMatrix(sumMatrix);

    console.log("\nPART C: Multiply Two Matrices");
    let rowsC1 = readlineSync.questionInt("Enter rows for Matrix A: ");
    let colsC1 = readlineSync.questionInt("Enter columns for Matrix A (and rows for Matrix B): ");
    let colsC2 = readlineSync.questionInt("Enter columns for Matrix B: ");

    console.log(`\nEnter Matrix A (${rowsC1} x ${colsC1}):`);
    let matC1 = readMatrix(rowsC1, colsC1);

    console.log(`\nEnter Matrix B (${colsC1} x ${colsC2}):`);
    let matC2 = readMatrix(colsC1, colsC2);

    let productMatrix = multiplyMatrices(matC1, matC2);
    console.log("\nProduct Matrix (A x B):");
    printMatrix(productMatrix);
}


main();