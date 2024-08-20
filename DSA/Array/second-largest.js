// Second Largest Number 
// Distinict element from array
// Input: [12, 35, 1, 10, 34, 1] ----->>> 34
// Input: [10, 5, 10] --------->>> 5

const arr = [12, 35, 1, 10, 34, 1, 35]

// Approch 1
function seconLargest(arr) {
    let max1 = Number.NEGATIVE_INFINITY
    let max2 = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if(arr[i] > max2 && arr[i] != max1) {
            max2 = arr[i];
        }
    }
    return max2;
}
// console.log(seconLargest(arr));


// Approch 2
function seconLargest(arr) {
    let uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a,b) => b-a);
    if(uniqueArray.length >= 2 ) {
        return uniqueArray[1];
    } else {
        return -1;
    }
}
console.log(seconLargest(arr));
