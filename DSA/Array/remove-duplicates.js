/*        [ Remove Duplicates from Sorted Array ]
Given an integer array nums sorted in non-decreasing order, remove
the duplicates in-place such that each unique element appears
only once.The relative order of the elements should be kept
the same.Then return the number of unique elements in nums.

Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]
*/


// Approach 1
function removeDuplicates(nums) {
    let i = 0;
    while(i<nums.length-1) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
        i++;
    }
    return nums.length;
}
var nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);


// Approach 2
function removeDuplicates(nums) {
    let i=0, j=1;
    while(j<nums.length) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    nums.splice(i+1); // removing remaining elements
    return i+1;
}
var nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
console.log(nums);
