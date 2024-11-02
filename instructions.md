In this coding exercise, you will create a JavaScript function that takes an array of integers and a target integer as inputs. Your task is to return the indices of the two numbers in the array that add up to the target. Each input would have exactly one solution, and you may not use the same element twice. 

For example, after implementing the function, you should be able to produce the following output:

```js
twoSum([2,7,11,15], 9); -> [0,1]
twoSum([3,2,4], 6); -> [1,2]
twoSum([3,3], 6); -> [0,1]
```

<details>
<summary>Hints</summary>

1. Create a function `twoSum(nums, target)` that accepts an array of integers and a target integer as arguments.
2. Initialize an empty JavaScript object or Map to store and retrieve numbers and their indices in constant time.
3. Iterate through the array of numbers using a for loop or the `.forEach()` method with index. For each number:
   - Calculate the complement by subtracting the current number from the `target`.
   - Check if the complement is in the object or Map. If it is, return an array with the index of the complement and the current index.
   - If the complement is not in the object or Map, add the current number and its index to the object or Map.
4. If no two numbers in the array add up to the `target`, return an empty array.
5. Call the function with different input arrays and target numbers, and log the results using a template literal.

</details>