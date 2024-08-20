// Palindrome number
// An Integer is Palindrome When it reads the same forward and backward 

// input: x = 121 ----->>> true
// input: x = 102  ----->>> false

const ispalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}
const res =  ispalindrome(121);
console.log(res);

// logic :   121 => "121" => ["1","2","1"] => ["1","2","1"] => "121" => 121 => true
//           201 => "201" => ["1","0", "2"] => ["2","0","1"] => "201" => 201 => false
