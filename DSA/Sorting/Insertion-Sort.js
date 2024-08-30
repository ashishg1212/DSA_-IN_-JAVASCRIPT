// Implement Insertion Sort

var insertionSort = function(nums) {
    let n = nums.length;
    for(let i=1; i<n; i++) {
        let key = nums[i]
        let j = i-1
        while(j>=0 && nums[j] > key) {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = key;
    }
    return nums;
}

var nums = [29, 10, 14, 37, 14, 33, 8, 7]
console.log(insertionSort(nums));

// Time Complexity = O(n^2)
// Space Complexity = O(1)
