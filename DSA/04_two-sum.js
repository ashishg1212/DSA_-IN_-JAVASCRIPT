/* Two sum 
Given an array of Integers nums and an integer target return the indices of the two numbers such that they add up to target. 

input: nums = [2, 7, 11, 25], target = 9
output: [0,1] (Because nums[0] + nums[1] == 9 we return [0, 1])

input: nums = [3, 2, 4], target = 6
output: [1, 2]
*/

// Brute force approche
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 25], 9));


// using js objects
var twoSum = function(nums, target) {
    var obj = {};
    
    for(let i=0; i<nums.length; i++) {
        var n = nums[i]
        if(obj[target-n] >= 0) {
            return [obj[target-n], i];
        } else {
            obj[n] = i;
        }
    }
};
console.log(twoSum([3, 2, 4], 6));