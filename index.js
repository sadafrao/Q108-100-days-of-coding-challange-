// Q108
// this function compare two string check if they are identically ignoring case
function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareStrings("Hello", "hello")); // true
console.log(compareStrings("Hello", "world")); // false
