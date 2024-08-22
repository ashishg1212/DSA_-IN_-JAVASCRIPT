// Question : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([{}])"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(char === '[' || char === '{' || char === '(') {
            stack.push(char)
        } else if(char === ']' || char === ')' || char === '}') {
            if(isEmpty(stack)) {
                return false;
            }
            const top = stack.pop();
            if( (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{') ) {
                    return false;
            }
        }
    }
    return isEmpty(stack);
};

function isEmpty(stack) {
    return stack.length === 0;
}
console.log(isValid("([{}]]"));
