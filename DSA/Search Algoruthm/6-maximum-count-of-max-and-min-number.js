// Question: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.


var maximumCount = function(nums) {
    return Math.max(upperBond(nums), lowerBond(nums));
};
function upperBond(nums) {
    let low = 0;
    let high = nums.length-1;
    while(low < high) {
        let mid = Math.ceil((low+high)/2);
        if(nums[mid] < 0) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return nums[0]>=0 ? 0 : low+1;
};
function lowerBond(nums) {
    let low = 0;
    let high = nums.length-1;
    while(low < high) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] > 0) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return nums[nums.length-1]<=0 ? 0 : nums.length-low;
};