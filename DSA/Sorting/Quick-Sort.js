// Implement Quick Sort

var quickSort = function(nums) {
    
    if(nums.length <= 1) return nums;

    let pivot = nums[0];
    let left = [];
    let right = [];
    for(let i=1; i<nums.length; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

var nums = [5, 2, 9, 3, 6, 1, 8, 7];
console.log(quickSort(nums));


// Time Complexity - O(n^2)
// Space Complexity - O(n)