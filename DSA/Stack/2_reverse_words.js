// Given a input string s, reverse the order of the words

// input : "the sky is blue" ---->>>>> output : "blue is sky the"

var reverseWords = function(s) {
    const words = s.split(" ");
    const stack = [];
    for(let i of words) {
        stack.push(i);
    }

    let reverseWords = "";
    while (stack.length > 0) {
        reverseWords += stack.pop() + " ";
    }
    return reverseWords.trim();
};

console.log(reverseWords("the sky is blue"));
