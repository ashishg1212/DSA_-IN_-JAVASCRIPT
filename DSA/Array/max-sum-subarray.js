// Question - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]


// 1. Brute Force 
var maxSumSubarray= function (nums) {
    let maxSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;
    for(let i=0; i<nums.length; i++) {
        let currSum = 0;
        for(let j=i; j<nums.length; j++) {
            currSum += nums[j];
            if(currSum > maxSum) {
                maxSum = currSum;
                startIdx = i;
                endIdx = j;
            }
        }
    }
    return {
        sum : maxSum,
        subArray : nums.slice(startIdx, endIdx+1)
    };
}
console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4]));


// Kadane's Algorithm
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        if(sum > maxSum) {
            maxSum = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};
console.log(maxSubArray([5, 4, -1, 7, 8]));

