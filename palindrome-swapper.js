/*
Palindrome Swapper

Have the function palindromeSwapper(str) take the str parameter being passed and determine if a palindrome
can be created by swapping two adjacent characters in the string. If it is possible to create a palindrome,
then your program should return the palindrome, if not then return the string -1.
The input string will only contain alphabetic characters.
For example: if str is "rcaecar" then you can create a palindrome by swapping the second and third characters,
so your program should return the string "racecar" which is the final palindromic string.

Examples:
Input: "anna", Output: anna
Input: "kyaak", Output: kayak
*/

const handler1 = (str, mirrorMismatches) => {
    const arr = str.split('');
    const reversedArr = str.split('').reverse();

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== reversedArr[i]) {
            arr.splice(i, 2, mirrorMismatches[0], mirrorMismatches[1]);
            return arr.join('');
        }
    }
};

const handler2 = (str, mismatch, mirrorMismatch) => {
    const halfStr = Math.floor(str.length / 2);
    const arr = str.split('');

    if (mismatch === str[halfStr]) {
        arr.splice(halfStr, 2, mirrorMismatch, mismatch);
    } else if (mirrorMismatch === str[halfStr]) {
        arr.splice(halfStr - 1, 2, mirrorMismatch, mismatch);
    }

    return arr.join('');
};

const palindromeSwapper = (str) => {
    const reversedStr = str.split('').reverse().join('');
    const mismatches = [];
    const mirrorMismatches = [];
    const halfStr = Math.floor(str.length / 2);

    for (let i = 0; i < halfStr; i += 1) {
        if (str[i] !== reversedStr[i]) {
            mismatches.push(str[i]);
            mirrorMismatches.push(reversedStr[i]);
        }
    }

    if (mismatches.length === 0) {
        return str;
    }

    if (mismatches.length > 2) {
        return -1;
    }

    if (mismatches.length === 1 && str.length % 2 === 0) {
        return -1;
    }

    if (mismatches.length === 1 && str.length % 2 !== 0) {
        if (mismatches[0] === str[halfStr] || mirrorMismatches[0] === str[halfStr]) {
            return handler2(str, mismatches[0], mirrorMismatches[0]);
        }
        return -1;
    }

    if (mismatches.length === 2 && mismatches[0] === mirrorMismatches[1] && mirrorMismatches[0] === mismatches[1]) {
        return handler1(str, mirrorMismatches);
    }
};
