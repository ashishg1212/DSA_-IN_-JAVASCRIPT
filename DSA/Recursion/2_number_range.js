// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output: [1, 2, 3, 4, 5]

function rangeOfNumbers(start, end) {
    if(start > end) {
        return [];
    } 
    const numbers = rangeOfNumbers(start, end-1);
    numbers.push(end);
    return numbers;
}
console.log(rangeOfNumbers(0,5));
