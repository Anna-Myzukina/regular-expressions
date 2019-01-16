/*Reuse Patterns Using Capture Groups
Some patterns you search for will occur multiple times in a string. 
It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings
in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings.
You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number.
This number starts at 1 and increases with each additional capture group you use. 
An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
Using the .match() method on a string will return an array with the string it matches, along with its capture group.


Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/ // Change this line
let result = reRegex.test(repeatNum);


/*
Reuse Patterns Using Capture Group
Hint 1:
Given code below:

let testString = "test test test ";
let reRegex =/(test)\s\1/;
let result = reRegex.test(testString);
result will match only test test because \1 in this example stands for the same text as most recently matched by the 1st capturing group (test).

If we were to lierally translate the regex, it would look something like this:

let re = /(test)\s\1;
let literalRe = /test\stest;
Both rea and literalRe would match the same thing.

Hint 2:
Given the code below:

let testString = "test test test ";
let reRegex =/(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
will match whole test test test because: \1 repeats (test) \2 repeats (\s)

Hint 3:
The code below:

let testString = "test test test test test test";
let reRegex =/(test)(\s)\1\2\1/g;
let result = reRegex.test(testString);
because we used \g, our Regex doesn’t return after first full match (test test test) and matched all repetitions.

Spoiler Alert - Solution Ahead!
Solution:
let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
*/
