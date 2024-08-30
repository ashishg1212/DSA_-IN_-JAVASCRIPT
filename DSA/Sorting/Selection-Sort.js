// Implement Selection Sort

var selectionSort = function(nums) {
    let n = nums.length;
    for(let i=0; i<n-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<n; j++) {
            if(nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
        }
    }
    return nums;
}

var nums = [5, 3, 1, 0, 2, 1];
console.log(selectionSort(nums));

// Time Complexity = O(n^2)
// Space Complexity = O(1)
