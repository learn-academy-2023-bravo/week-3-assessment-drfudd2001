// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

  // 1. Define a function that takes in a single parameter, number.
  // 2. Declare an empty array to hold the Fibonacci sequence numbers.
  // 3. Push 1 and 1 to the array.
  // 4. Declare a loop that will continue until the array length is equal to n.
  // 5. Within the loop, add the previous two numbers in the array to get the next number in the sequence and push it to the array.
  // 6. Return the array with the Fibonacci sequence numbers.

// a) Create a test with expect statements for each of the variables provided.

 const fibLength1 = 6
 // Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Variable added to verify if function will allow for numbers lower than 2.
const fibLength3 = 2
// Expected output: 'Invalid input. Length must be a number greater than 2.'

describe('fibonacciSequence', () => {
// Test case 1
  it('should return an array of length 6 containing the Fibonacci sequence up to 8', () => {

    // Define input for the function
    const number= 6

    // Define expected output
    const expected = [1, 1, 2, 3, 5, 8]

    // Call the function and store the result
    const result = fibonacciSequence(number)

    // Use Jest's expect function to check if the result matches the expected output  
    expect(result).toEqual(expected)
  })

  // Test case 2
  it('should return an array of length 10 containing the Fibonacci sequence up to 55', () => {

    // Define input for the function
    const number = 10

    // Define expected output
    const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    // Call the function and store the result
    const result = fibonacciSequence(number)

    // Use Jest's expect function to check if the result matches the expected output
    expect(result).toEqual(expected)
  })

  // Test case 3
  it('should return an array containing the first "number" numbers of the Fibonacci sequence', () => {

    // Set the value of number to a random number greater than 2
    const number = Math.floor(Math.random() * 10) + 3

    // Call the function and store the result
    const result = fibonacciSequence(number)

    // The length of the result should be equal to n
    expect(result.length).toEqual(number)
    // The first two numbers in the result should be 1
    expect(result[0]).toEqual(1)
    expect(result[1]).toEqual(1)
    // Each subsequent number in the result should be the sum of the two preceding numbers
    for (let i = 2; i < number; i++) {
      expect(result[i]).toEqual(result[i - 1] + result[i - 2])
      }
  })
})



// Output of test:
  // FAIL  ./code-challenges.test.js
  // fibonacciSequence
  //   ✕ should return an array of length 6 containing the Fibonacci sequence up to 8
  //   ✕ should return an array of length 10 containing the Fibonacci sequence up to 55 (1 ms)
  //   ✕ should return an array containing the first "number" numbers of the Fibonacci sequence

  //   Test Suites: 1 failed, 1 total
  //   Tests:       3 failed, 3 total
  //   Snapshots:   0 total
  //   Time:        0.179 s, estimated 1 s
  //   Ran all test suites.

// b) Create the function that makes the test pass.

// Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

const fibonacciSequence = (length) => {

  // Check if the input is valid
  if (typeof length !== 'number' || length < 3) {

    // Return an error message if the input is not valid
    return ('Invalid input. Length must be a number greater than 2.')
  }

  // Initialize the sequence array with the first two numbers
  const sequence = [1, 1]

  // Calculate the next numbers in the sequence and add them to the array
  for (let i = 2; i < length; i++) {

    // Calculate the next number in the sequence by adding the two previous numbers
    const nextNumber = sequence[i - 1] + sequence[i - 2]

    // Add the next number to the sequence array
      sequence.push(nextNumber)
  }

  // Return the generated sequence array
  return sequence
}

// Output:
  //  PASS  ./code-challenges.test.js
  //  fibonacciSequence
  //   ✓ should return an array of length 6 containing the Fibonacci sequence up to 8 (2 ms)
  //   ✓ should return an array of length 10 containing the Fibonacci sequence up to 55
  //   ✓ should return an array containing the first "number" numbers of the Fibonacci sequence

  //   Test Suites: 1 passed, 1 total
  //   Tests:       3 passed, 3 total
  //   Snapshots:   0 total
  //   Time:        0.148 s, estimated 1 s
  //   Ran all test suites.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
   sunday: 90,
   monday: 30,
   tuesday: 20,
   wednesday: 15,
   thursday: 30,
   friday: 15,
   saturday: 60
 }
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
  }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe('sortValues', () => {
  it('returns an array of values sorted from least to greatest for studyMinutesWeek1', () => {
    // Define an object called studyMinutesWeek1 with keys and values
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Define the expected output as an array with the values of studyMinutesWeek1 sorted from least to greatest
    const expectedOutput = [15, 15, 20, 30, 30, 60, 90]
    // Call the sortValues function with studyMinutesWeek1 as an argument and compare the result to the expected output
    expect(sortValues(studyMinutesWeek1)).toEqual(expectedOutput)
  })

  it('returns an array of values sorted from least to greatest for studyMinutesWeek2', () => {
    // Define an object called studyMinutesWeek2 with keys and values
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Define the expected output as an array with the values of studyMinutesWeek2 sorted from least to greatest
    const expectedOutput = [10, 15, 20, 45, 60, 65, 100]
    // Call the sortValues function with studyMinutesWeek2 as an argument and compare the result to the expected output
    expect(sortValues(studyMinutesWeek2)).toEqual(expectedOutput)
  })
})

// Output:
  // FAIL  ./code-challenges.test.js
  // sortValues
  //   ✕ returns an array of values sorted from least to greatest for studyMinutesWeek1 (1 ms)
  //   ✕ returns an array of values sorted from least to greatest for studyMinutesWeek2

  //   Test Suites: 1 failed, 1 total
  //   Tests:       2 failed, 2 total
  //   Snapshots:   0 total
  //   Time:        0.184 s, estimated 1 s
  //   Ran all test suites.


// b) Create the function that makes the test pass.

const sortValues = (studyMinutes) => {

  // Create an array called valuesArr that contains the values of the studyMinutes object
  const valuesArr = Object.values(studyMinutes)

  // Use the sort method to sort valuesArr in ascending order, using a callback function to compare values
  valuesArr.sort((a, b) => a - b)

  // Return the sorted array valuesArr
  return valuesArr
}

// Output:
// PASS  ./code-challenges.test.js
// sortValues
//   ✓ returns an array of values sorted from least to greatest for studyMinutesWeek1 (1 ms)
//   ✓ returns an array of values sorted from least to greatest for studyMinutesWeek2

//   Test Suites: 1 passed, 1 total
//   Tests:       2 passed, 2 total
//   Snapshots:   0 total
//   Time:        0.156 s, estimated 1 s
//   Ran all test suites.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

  // 1. Define a function called accumulatingSum that takes an array arr as its parameter.
  // 2. Initialize a variable sum to 0.
  // 3. Use the map method to create a new array from the input array arr.
  // 4. For each value val in the input array arr, add it to the variable sum and return the new value.
  // 5. Return the new array of accumulating sum.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// Describe block for the accumulatingSum function
describe('accumulatingSum', () => {
  
  // Test case for non-empty input array
  it('returns an array of the accumulating sum for accountTransactions1', () => {

    // Define input and expected output
    const accountTransactions1 = [100, -17, -23, -9]
    const expectedOutput = [100, 83, 60, 51]
    
    // Call the function with the input and check the output
    const result = accumulatingSum(accountTransactions1)
    expect(result).toEqual(expectedOutput)
  })

  // Test case for non-empty input array
  it('returns an array of the accumulating sum for accountTransactions2', () => {

    // Define input and expected output
    const accountTransactions2 = [250, -89, 100, -96]
    const expectedOutput = [250, 161, 261, 165]
    
    // Call the function with the input and check the output
    const result = accumulatingSum(accountTransactions2)
    expect(result).toEqual(expectedOutput)
  })

  // Test case for empty input array
  it('returns an empty array for an empty input array', () => {

    // Define input and expected output
    const accountTransactions3 = []
    const expectedOutput = []
    
    // Call the function with the input and check the output
    const result = accumulatingSum(accountTransactions3)
    expect(result).toEqual(expectedOutput)
  })
})

// Outcome:
  //  FAIL  ./code-challenges.test.js
  //  accumulatingSum
  //   ✕ returns an array of the accumulating sum for accountTransactions1 (1 ms)
  //   ✕ returns an array of the accumulating sum for accountTransactions2
  //   ✕ returns an empty array for an empty input array

  //   Test Suites: 1 failed, 1 total
  //   Tests:       3 failed, 3 total
  //   Snapshots:   0 total
  //   Time:        0.176 s, estimated 1 s
  //   Ran all test suites.

// b) Create the function that makes the test pass

// This function takes an array as input and returns an array of the accumulating sum
const accumulatingSum = (arr) => {

  // Initialize a variable 'sum' to keep track of the cumulative sum, starting at 0
  let sum = 0

  // Use the map() method to loop through the array and accumulate the sum
  return arr.map((val) => {

    // For each value in the array, add it to the sum and update the 'sum' variable
    sum += val

    // Return the updated 'sum' value as the element in the new array
    return sum
  })
}

  // Output:
    // PASS  ./code-challenges.test.js
    // accumulatingSum
    //   ✓ returns an array of the accumulating sum for accountTransactions1 (1 ms)
    //   ✓ returns an array of the accumulating sum for accountTransactions2 (1 ms)
    //   ✓ returns an empty array for an empty input array

    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total
    // Snapshots:   0 total
    // Time:        0.156 s
    // Ran all test suites.
    
 /*--------------------------------------------------------------------------------------------*/ 

// Output of test ran together:

  // FAIL  ./code-challenges.test.js
  // fibonacciSequence
  //   ✕ should return an array of length 6 containing the Fibonacci sequence up to 8 (1 ms)
  //   ✕ should return an array of length 10 containing the Fibonacci sequence up to 55
  //   ✕ should return an array containing the first "number" numbers of the Fibonacci sequence
  // sortValues
  //   ✕ returns an array of values sorted from least to greatest for studyMinutesWeek1
  //   ✕ returns an array of values sorted from least to greatest for studyMinutesWeek2
  // accumulatingSum
  //   ✕ returns an array of the accumulating sum for accountTransactions1
  //   ✕ returns an array of the accumulating sum for accountTransactions2
  //   ✕ returns an empty array for an empty input array

  // Test Suites: 1 failed, 1 total
  // Tests:       8 failed, 8 total
  // Snapshots:   0 total
  // Time:        0.204 s, estimated 1 s
  // Ran all test suites.

  // PASS  ./code-challenges.test.js
  // fibonacciSequence
  //   ✓ should return an array of length 6 containing the Fibonacci sequence up to 8 (1 ms)
  //   ✓ should return an array of length 10 containing the Fibonacci sequence up to 55
  //   ✓ should return an array containing the first "number" numbers of the Fibonacci sequence
  // sortValues
  //   ✓ returns an array of values sorted from least to greatest for studyMinutesWeek1 (1 ms)
  //   ✓ returns an array of values sorted from least to greatest for studyMinutesWeek2
  // accumulatingSum
  //   ✓ returns an array of the accumulating sum for accountTransactions1
  //   ✓ returns an array of the accumulating sum for accountTransactions2
  //   ✓ returns an empty array for an empty input array

  //   Test Suites: 1 passed, 1 total
  //   Tests:       8 passed, 8 total
  //   Snapshots:   0 total
  //   Time:        0.171 s, estimated 1 s
  //   Ran all test suites.