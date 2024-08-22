// Question :  Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function isPalindrome(num, start=0, end=null) {
    const str = num.toString();
    if(end===null) {
        end = str.length-1;
    }
    if(start >= end) {
        return true;
    }
    if(str[start] !== str[end]) {
        return false
    }
    return isPalindrome(num, start+1, end-1);
}
console.log(isPalindrome(121));
console.log(isPalindrome(1212));
console.log(isPalindrome(10));
console.log(isPalindrome(55355));
