// Implement Merge Sort

var mergeSort = function(nums) {
    // Base Condition
    if(nums.length <= 1 ) return nums;

    let mid = Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let sorted = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

var nums = [22, 17, 11, 25, 37, 19]
console.log(mergeSort(nums));

// Time Complexity = O(nlog n)
// Space Complexity = O(n)