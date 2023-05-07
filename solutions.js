/* 1. What is the difference between a parameter and an argument?
A parameter is one of the variables in a function, whereas arguments are the data that you pass in the method's parameters after you write out the function ompletely. */

/* 2. Within a function, what is the difference between return and console.log?
console.log is itself a function that will log whatever arguments are passeed in it to the console, whereas return is the keyword used inside of a function as part of the return statement. Once the line in the return statement is executed, the function is exited and the function will return what was defined in te return statement */

////////////////////////////////////////////////////////////////////////////////////////////

// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

// function checkPalindrome("Radar"){
//     for(let i = 0; i<checkPalindrome.length; i++) {
//         if (i === true) {
//             console.log
//         }
//     } 
// }


function checkPalindrome(string) {
    // convert the string to lowercase
    string = string.toLowerCase();
    // remove non-alphanumeric characters from the string
    string = string.replace(/[^a-z0-9]/g, '');
    // reverse the string
    let reversedStr = string.split('').reverse().join('');
    // check if the string is equal to its reverse
    return string === reversedStr;
  }

  console.log(checkPalindrome("Radar")); // => true
  console.log(checkPalindrome("Borscht")); // => false
