// Question : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "My name is alex" , maxlength=3
// Output: "Subscribe…"

function truncate(str,maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength) + "..."
    else return str
}

console.log(truncate("My name is alex", 7));