// Implement Bubble sort

var bubbleSort = function(nums) {
    let n = nums.length;
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-i-1; j++) {
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums;
}
var nums = [2, 5, 3, 4, 1];
console.log(bubbleSort(nums));


// Time Complexity : O(n^2)
// Space Complexity : O(1)