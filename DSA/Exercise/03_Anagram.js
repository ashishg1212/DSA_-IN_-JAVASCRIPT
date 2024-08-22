 /*  Valid Anagram
 An Anagram is word or phrase or formed by rearranging the latters of a different word or phrase, using all the original letters exatly once

 input : (s="anagram"), (t="nagaram"); ------->>>>> output "true"
 input : (s="rat"), (t="car");         ------->>>>> output "false"
*/

// 1st Approch
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s===t
};
console.log(isAnagram("anagram","nagaram"));


// 2nd Approch
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[s[i]] || 0) + 1;
    }
    for(const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
};            
console.log(isAnagram("rat","car"));