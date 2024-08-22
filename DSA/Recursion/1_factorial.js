// Ques 1 : Factorial of n
// Input:  n = 6  ----->>>>>  Output: 1 * 2 * 3 * 4 * 5 * 6 => 720

function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num-1);
}
console.log(factorial(6));
