// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function twoSum(nums, target) {
  // Initialize an empty object to store the number and their indices

  const indices = {};

  // Lopp through each number in the array with its index
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement that would add up to the target

    const complement = target - nums[i];

    // Check if the complement is already in the object

    if (complement in indices) {
      // If it is, return the indices as an array
      return [indices[complement], i];
    }

    // If not, add the current number and its index to the object
    indices[nums[i]] = i;
  }

  // If no solution is found, return an empty array
  return [];
}

// Testing the function

console.log(twoSum([2, 7, 11, 15], 9)); // -> [0, 1]
console.log(twoSum([3, 2, 4], 6)); // -> [1, 2]
console.log(twoSum([3, 3], 6)); // => [0, 1]
