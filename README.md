# :fire: JS-Cheatsheet :octocat:
![Javascript picture](https://miro.medium.com/max/668/1*hcws3Wa6u9IqaEZ_4X04uw.jpeg)
> Javascript is a "high-level single-threaded, garbage-collected, interpreted (or just-in-time compiled),  prototype-based, multi-paradigm, dynamic language with a non-blocking event loop"

# Table of Contents
- [Introduction](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#fire-js-cheatsheet-octocat)
  - [Comments](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#comments)
  - [Variables](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#variables)
  - [Scope](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#scope)
  - [Hoisting](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#scope)
- [Data Types](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#data-types)
  - [Primitives](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#primitives)
- [Operators](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#operators)
- [Strings](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#strings)
  - [Basics](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#basics)
  - [Template String](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#template-string)
  - [Escape Sequences](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#escape-sequences)
  - [String Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#string-properties-and-methods)
- [Regular Expressions](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#regular-expressions)
  - [Regex Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#regex-methods)
  - [Examples](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#examples)
- [Conditional Statements](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#conditional-statements)
  - [if..else statements](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#ifelse-statements)
  - [switch statements](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#switch-statements)
  - [Ternary Operator](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#ternary-operator)
- [Loops and Iteration](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#loops-and-iteration)
  - [for loop](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#for-loop)
  - [for...of statement](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#forof-statement) 
  - [for...in statement](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#forin-statement) 
  - [while loop](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#while-loop)
  - [do...while](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#dowhile)
  - [break](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#break)
  - [continue](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#continue)
- [Array](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#array)
  - [Array Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#array-properties-and-methods)
- [Functions](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#functions)
  - [Function Declaration](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-declaration)
  - [Function Expression](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-expression)
  - [Arrow Function](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#arrow-function)

## Comments
```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```

## Variables
* `var` statement declares a function-scoped or globally-scoped variable, can be redeclared or reassigned.
* `let` statement declares a block-scoped local variable, can't be redeclared but it can reassigned. 
* `const` are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.

> **Note**: It is convention that `const` must be declared all UPPERCASE.

```javascript
var myProgLanguage = "Javascript";
myProgLanguage = "Python"; // Can be reassigned
var myProgLanguage = "Python"; // Can be redeclared

let age = 20;
age = 19; // Can be reassigned
let age = 19; // Uncaught SyntaxError: Identifier 'name' has already been declared

const FIRST_PHILIPPINES_PRESIDENT = "Emilio Aguinaldo";
FIRST_PHILIPPINES_PRESIDENT = "Andres Bonifacio"; // Uncaught TypeError: Assignment to constant variable.
const FIRST_PHILIPPINES_PRESIDENT = "Andres Bonifacio"; // Uncaught SyntaxError: Identifier 'FIRST_PHILIPPINES_PRESIDENT' has already been declared
```

## Hoisting

### Variable hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception.

This concept is known as **hoisting**. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of `undefined`. So even if you declare and initialize after you use or refer to this variable, it still returns `undefined`.

```javascript
// Example 1
console.log(x === undefined); // true
var x = 3;

// Example 2
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```

### Function hoisting

In the case of functions, only function declarations are hoisted—but not the function expressions.

```javascript
/* Function declaration */
foo(); // "bar"

function foo() {
  console.log('bar');
}

/* Function expression */
baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};
```
## Scope

**Global scoped** is when you declared your variables outside the function.
**Function** or **Local scoped** is when you declared your variables inside the function.
**Block scoped** is when you declared your variables inside the curly braces `{}`.

# Data Types
The latest ECMAScript standard defines eight data types:

## Primitives 
The 7 primitives data types are `undefined,string,boolean,bigint,null,object and symbol.`

Data Types | Example | Description
------------ | ------------- |  -------------
`Undefined` | `var myName;` | A variable that has `not been assigned a value is of type undefined`. 
`String` | `var greet = "Hello, World!";` | The String object is `used to represent and manipulate a sequence of characters`.
`Number` | `const MATH_PI = 3.14159;` | Number is a primitive wrapper object `used to represent and manipulate numbers like 37 or -9.25`.
`Boolean` | `const bool = true;` | `True` or `False`.
`BigInt` | `const theBiggestInt = 9007199254740991n;` | BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1,.
`Null` | `var noValue = "";` | Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
`Symbol` | Represents a unique identifier. | (new in ECMAScript 2015). A data type whose instances are unique and immutable
`Object` | `var arr = ["123"];` | A object is a collection of properties.

# Operators

Arithmetic | Example | Description
------------ | ------------- | -------------
Remainder `%`| 12 % 5 returns 2 | Binary operator. Returns the integer remainder of dividing the two operands.
Increment `++` | Unary operator. Adds one to its operand. If used as a prefix operator `++x`, returns the value of its operand after adding one; if used as a postfix operator `x++`, returns the value of its operand before adding one.| If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.
Decrement `--`| Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.|If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
Unary negation `-` | Unary operator. Returns the negation of its operand. | 	If x is 3, then -x returns -3.
Unary plus `+`| Unary operator. Attempts to convert the operand to a number, if it is not already. | +"3" returns 3. +true returns 1.
Exponentiation operator `**` | Calculates the base to the exponent power, that is, baseexponent | 2 ** 3 returns 8. 10 ** -1 returns 0.1.
Addition `+` | a + b returns c | add the both operands.
Subtraction `-` | a - b returns c | subtract the both operands.
Multiplication `*` | a * b returns c | multiply the both operands.
Division `/` | a / b returns c | divide the both operands.

Assignment | Example | Description
------------ | ------------- | -------------
Assignment `=`| x = y | x = y
Addition assignment `+=`| x += y | x = x + y
Subtraction assignment `-=`| x -= y | x = x - y
Multiplication assignment `*=`| x *= y | x = x * y
Division assignment `/=` | x /= y | x = x / y
Remainder assignment `%=`| x %= y | x = x % y

Comparison | Example | Description
------------ | ------------- | -------------
Equal to `==`| x == y | Returns true if the operands are equal.
Not equal `!=`| x != y | Returns true if the operands are not equal.
Strict equal `===`| x === y | Returns true if the operands are equal and of the same type.
Strict not equal `!==`| x !== y | Returns true if the operands are of the same type but not equal, or are of different type.
Greater than `>` | x > y | Returns true if the left operand is greater than the right operand.
Greater than or equal `>=` | x >= y | Returns true if the left operand is greater than or equal to the right operand.
Less than `<` | x < y | Returns true if the left operand is less than the right operand.
Less than or equal `<=` | x <= y | Returns true if the left operand is less than or equal to the right operand.

Logical | Example | Description
------------ | ------------- | -------------
Logical AND ```&&```| expr1 ```&&``` expr2 | Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, ```&&``` returns true if both operands are true; otherwise, returns false.
Logical NOT ```!``` | ```!```expr | Returns false if its single operand that can be converted to true; otherwise, returns true.
Logical OR `ll` | expr1 `ll` expr2 | Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, `ll` returns true if either operand is true; if both are false, returns false.

Logical | Example | Description
------------ | ------------- | -------------
Bitwise AND `&` | a `&` b | Returns 0 if the corresponding bits of both sides of the bitwise operator are 1, at least one of them is 0.
Bitwise OR `l` | a `l` b | Returns 1 if at least one of the corresponding bits of both sides of the bitwise operator is 1.
Bitwise XOR `^` | a `^` b | Returns 1 if only one of the corresponding bits of both sides of the bitwise operator is 1.
Bitwise NOT `~` | `~` a | Reverses the bits of the operand.
Left shift `<<` | a `<<` b | ab Adding bit 0 to the  right (<32) of the binary number  shifts to the left.
Sign-propagating right shift `>>` | a `>>` b | a The binary state bof the number (<32) shifts to the right by one bit. Shifts by adding b 0s for positive numbers and 1 for negative numbers.
Zero-fill right shift `>>>` | a `>>>` b | ab(<32) bit to the right  of the binary representation  of the a number , badds 0s to the left of the number regardless of whether the number is positive or negative  .

> **Note:** The logical OR is this **`||`** and not in the table.

# Strings

String is a sequence of characters.

## Basics

```javascript
   // escape literal quotes
   var sentence = 'Mikasa said, "Gabriel is learning JavaScript".'; // Mikasa said, "Gabriel is learning JavaScript".

   // concatenating strings
   var ourStr = "I come first. " + "I come second."; // I come first. I come second.

   // concatenating strings with +=
   var ourStr = "I come first. ";
   ourStr += "I come second."; // I come first. I come second.

   // constructing strings with variables
   var myName = "Mikasa";
   var myStr = "Hello, my name is " + myName + ", how are you?"; // Hello, my name is Mikasa, how are you?

   // appending variables to strings
   var anAdjective = "awesome!";
   var ourStr = "freeCodeCamp is ";
   ourStr += anAdjective; // freeCodeCamp is awesome!
```
## Template String

**Template string** is new to JavaScript, it is introduced to ES6. Syntax: ``` `${variable}` ``` 

```javascript
const BIRTHDAY = "January 7, 2000";
const sentence = `Hi there! my birthday is ${BIRTHDAY}.`; // Hi there! my birthday is January 7, 2000.
```
##  Escape sequences

Data Types | Example
------------ | ------------- 
``` \' ``` | Single quote (')
``` \" ``` | Double quote (")
``` \\ ``` | Backslash (\)
``` \n ``` | Newline
``` \r ``` | Carriage return
``` \t ``` | Tab
``` \b ``` | Backspace
``` \f ``` | Form feed

## String Properties and Methods

Properties | Description
------------ | -------------
 `length`|  Returns the length of a string
 
Methods | Description
------------ | -------------
 `split()`|  Splits a string into an array of substrings
 `charAt()` |  Returns the character at the specified index
 `charCodeAt()` | Returns the Unicode of the character at the specified index
 `codePointAt()` | Returns a non-negative integer that is the Unicode code point value.
 `String.fromCharCode()` | Converts Unicode values to characters
 `String.fromCodePoint()` | Returns a string created by using the specified sequence of code points.
 `concat()` | Joins two or more strings, and returns a new joined strings
 `startsWith()` | Checks whether a string begins with specified characters
 `endsWith()` | Checks whether a string ends with specified string/characters
 `includes()` | Checks whether a string contains the specified string/characters
 `indexOf()` | Returns the position of the first found occurrence of a specified value in a string
 `lastIndexOf()` | Returns the position of the last found occurrence of a specified value in a string
 `match()` | Searches a string for a match against a regular expression, and returns the matches
 `replace()` | Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
 `repeat()` | Returns a new string with a specified number of copies of an existing string
 `search()` | Searches a string for a specified value, or regular expression, and returns the position of the match
 `slice()` | Extracts a part of a string and returns a new string
 `substr()` | Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
 `substring()` | Extracts the characters from a string, between two specified indices
 `localCompare()` | method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
 `toLocaleLowerCase()` | Converts a string to lowercase letters, according to the host's locale
 `toLocaleUpperCase()` | Converts a string to uppercase letters, according to the host's locale
 `toLowerCase()` | Converts a string to lowercase letters
 `toUpperCase()` | Converts a string to uppercase letters
 `toString()` | Returns the value of a String object
 `trim()` | Removes whitespace from both ends of a string
 `valueOf()` | Returns the primitive value of a String object

> **Note:** All string methods return a new value. They do not change the original variable.

```javascript
// STRING PROPERTIES

const stringLength = () => "Javascript".length;
// console.log(stringLength()); //10

const stringFirstIndex = str => str[0]; 
// console.log(stringFirstIndex("Hello, World!")); //H

const stringLastIndex = str => str[str.length - 1]; 
// console.log(stringLastIndex("Hello, World!")); //!

// STRING METHODS

const stringSplit = str => str.split(""); 
// console.log(stringSplit("string")); // ​​​​​[ 's', 't', 'r', 'i', 'n', 'g' ]​​​​​ 

const stringCharAt = str => str.charAt(0); 
// console.log(stringCharAt("Hello, World!")); //H

const stringCharCodeAt = str => str.charCodeAt(str); 
// console.log(stringCharCodeAt("A")); //65

const stringCodePointAt = str => str.codePointAt(0); 
//console.log(stringCodePointAt("B")); //66

const stringFromCharCode = str => String.fromCharCode(str); 
// console.log(stringFromCharCode(66)); //B

const stringFromCodePoint = str => String.fromCodePoint(str); 
//console.log(stringFromCodePoint(65)); //A

const stringConcat = str => "Hello, ".concat(str);  
//console.log(stringConcat("Gabriel")); // Hello, Gabriel

const stringStartsWith = str => str.startsWith("Hello"); 
// console.log(stringStartsWith("Hello, Gabriel!")); //true

const stringEndsWith = str => str.endsWith("Gabriel!"); 
// console.log(stringEndsWith("Hello, Gabriel!")); //true

const stringIncludes = str => str.includes("Python");
// console.log(stringIncludes("Javascript is easy to learn")); //false

const stringIndexOf = str => str.indexOf("is"); 
// console.log(stringIndexOf("This is a javascript cheatsheet")); //2

const stringLastIndexOf = str => str.lastIndexOf("is"); 
//console.log(stringLastIndexOf("This is a javascript cheatsheet")); //5

const stringMatch = str => str.match(/\d/g); 
// console.log(stringMatch("This is a javascript cheatsheet made by Gabriel on July 31")); //["3", "1"]

const stringReplace = str => str.replace(/\d/g, "5"); 
// console.log(stringReplace("July 31")); // July 55

const stringRepeat = str => str.repeat(3); 
// console.log(stringRepeat("Javascript")); //JavascriptJavascriptJavascript

const stringSearch = str => str.search("lit");
// console.log(stringSearch("Javascript is lit")); //14

const stringSlice = str => str.slice(0, 10); 
// console.log(stringSlice("Javascript is lit")); //Javascript

const stringSubStr = str => str.substr(1, 2); 
// console.log(stringSubStr("Javascript is lit")); // av

const stringSubString = str => str.substring(1, 2); 
// console.log(stringSubString("Javascript is lit")); // a

const stringLocaleCompare = str => str.localeCompare("c"); 
// console.log(stringLocaleCompare("Hello")); // -1

const stringToLocaleLowerCase = str => str.toLocaleLowerCase(); 
// console.log(stringToLocaleLowerCase("Javascript is LIT")); // javascript is lit

const stringToLocaleUpperCase = str => str.toLocaleUpperCase(); 
// console.log(stringToLocaleUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

const stringToLowerCase = str => str.toLowerCase(); 
// console.log(stringToLowerCase("Javascript is LIT")); // javascript is lit

const stringToUpperCase = str => str.toUpperCase(); 
// console.log(stringToUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

const stringToString = str => str.toString(); 
// console.log(stringToString(["j","s"])); // j,s

const stringTrim = str => str.trim();
 // console.log(stringTrim("      Hello")); // Hello

const stringValueOf = str => str.valueOf(); 
// console.log(stringValueOf("Hello, World!")); // Hello, World!
```
# Regular Expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

Character classes | Description
------------ | -------------
`\` | Escapes a special character
`l` | OR
`.` | The wildcard character . will match any character except new lines.
`i` | This flag is used to ignore upper and lowercase. `/ignorecase/i.`
`g` | Search or extract a pattern more than once.
`[]` | Allow you to define the characters to match.` /b[au]g/` will match "bag", "bug" but not "bog".
`[a-z]` | Match all the characters between a and z.
`[1-9]` | Match all the numbers between 1 and 9.
`[a-z1-9]` | Match all the character between a and z, and the numbers between 1 and 9.
`[^]` | Match the characters not in the set. [^a-e] match all other characters except A, B, C, D, and E.
`+` | Match 1 or more occurrences of the previous character in a row.
`*` | Match 0 or more occurrences of the previous character.
`?` | Match 0 or 1 occurrence of the previous character. Useful for Lazy matching.
`^` | Search for patterns at the beginning of strings.
`$` | Search for patterns at the end of a string.
`\w`| Equal to [A-Za-z0-9_]. Matches upper, lowercase, numbers the and underscore character (-).
`\W`| Matches any nonword character. Equivalent to [^a-za-z0-9_].
`\d`| Equal to [0-9]. Match one digit.
`\D`| Equal to [^0-9]. Match one non digit.
`\s	`| Match a whitespace.
`\S	`| Match everything except whitespace.
`a{2,5}	`| Match the letter a between 3 and 5 times.
`a{2,}`| Specify only the lower number of matches.
`a{5}`| Specify the exact number of matches.
`(...)`| Specify a group that can be acceded with number (from 1).

## Regex Methods
Method	 | Description
------------ | -------------
`test()`| Returns true or false if the pattern match a string or not.
`match()`| Extract the actual matches found.
`replace()`| Search and replace text in a string .

### Examples

```javascript
// test method returns true or false if the pattern match a string or not
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// extract the matches of a regex with the match method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// Search and replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."

// search for multiple patterns using the alternation or OR operator: |
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// ignore upper or lowercase
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // flag i
let result = fccRegex.test(myString);

// Search or extract a pattern more than once
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // a regex can have multiple flags
let result = twinkleStar.match(starRegex);

// The wildcard character . will match any character except new lines.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// define the characters to match, in this example all the vowels in quoteSample
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// Match all the characters in quoteSample (between a and z)
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// Match all the character between two characters and numbers
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// Match all that is not a number or a vowel
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

// Match 1 or more occurrences of the previous character (* for 0 or more)
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// ? Match 0 or 1 occurrence of the previous character. Useful for Lazy matching
let text = "titanic";
let myRegex = /t[a-z]*?i/;
let result = text.match(myRegex);

// Search for patterns at the beginning of strings
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// Search for patterns at the end of a string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// \w is equal to [A-Za-z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// Match only 3 to 6 letter h's in the word "Oh no"
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

// Match both the American English (favorite) and the British English (favourite) version of the word
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// Groups () let you reuse patterns
let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/; // every 1 represent the group (\d+)
let result = reRegex.test(repeatNum);

// Remove all the spaces at the beginning an end of a string
let hello = "   Hello, World!  ";
let wsRegex = /^\s+(.*\S)\s+$/;
let result = hello.replace(wsRegex, '$1'); // returns 'Hello, World!'

```
# Conditional Statements

Conditional statements allow us to represent such decision making in JavaScript, from the choice that must be made.

## if...else statements

Basic if...else syntax looks like the following in [pseudocode:](https://developer.mozilla.org/en-US/docs/Glossary/pseudocode)

```javascript
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

## switch statements

Switch statements take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

```javascript
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}

```

## Ternary Operator

Ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you simply have two choices that are chosen between via a true/false condition. The pseudocode looks like this:

```javascript
  ( condition ) ? run this code : run this code instead;
```

# Loop

Programming loops are all to do with doing the same thing over and over again — which is termed iteration in programming speak.

## for loop

```javascript
for (initializer; condition; final-expression) {
  // code to run
}
```

## for...of statement

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```javascript
for (variable of iterable) {
  //statement
}
```

## for...in statement

The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

```javascript
for (variable in object) {
  //statement
}
```

## while loop

```javascript
initializer
while (condition) {
  // code to run

  final-expression
}
```

## do...while

```javascript
initializer
do {
  // code to run

  final-expression
} while (condition)
```

## break

The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

Example:
```javascript
const num = 5;

  for (let i = 0; i < num; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);  
  }

/*
    0 
    1
    2
*/
```

## continue

The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

Example:
```javascript
const num = 5;

  for (let i = 0; i < num; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);  
  }

/*
    0 
    1
    2
    4
*/
```

# Array

Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.

## Array Properties and Methods

Properties | Description
------------ | -------------
`length` | The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

Methods | Description
------------ | -------------
`concat()` | The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
`includes()` | The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
`join()` | The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
`pop()` | The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
`push()` | The push() method adds one or more elements to the end of an array and returns the new length of the array.
`shift()` | The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
`unshift()` | The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
`indexOf()` | The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
`lastIndexOf()` | The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
`reverse()` | The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
`slice()` | The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
`splice()` | The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
`fill()` | The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
`toString()` | The toString() method returns a string representing the specified array and its elements.
`values()` | The values() method returns a new Array Iterator object that contains the values for each index in the array.
`forEach()` | The forEach() method executes a provided function once for each array element.
`every()` | The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
`some()` | The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
`map()` | The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
`filter()` | The filter() method creates a new array with all elements that pass the test implemented by the provided function.
`reduce()` | The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
`reduceRight()` | The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
`find()` | The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
`findIndex()` | The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
`sort()` | The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
`Array.from()` | The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
`Array.isArray()` | The Array.isArray() method determines whether the passed value is an Array.
`Array.of()` | The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
`copyWithin()` | The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
`entries()` | The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
`keys()` | The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
`flat()` | The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.




```javascript
  // ARRAY PROPERTIES

  const arrayLength = arr => arr.length;
  // console.log(arrayLength(["javascript", "is", "a", "programming", "language"])); // 5


  // ARRAY METHODS

  const arrayConcat = arr => [1,2,3].concat(arr);
  // console.log(arrayConcat([4,5,6])); // [1, 2, 3, 4, 5, 6]

  const arrayIncludes = arr => arr.includes(2);
  // console.log(arrayIncludes([1,2,3,4,5,6])); // true

  const arrayJoin = arr => arr.join();
  // console.log(arrayJoin(["javascript", "is", "a", "programming", "language"])); //javascript,is,a,programming,language

  const arrayPop = () => [1,2,3].pop();
  // console.log(arrayPop()) // 3

  const arrayPush = arr =>  arr.push("Gabriel");
  // console.log(arrayPush(["Hello"])) // 2

  const arrayShift = () => [10,2,3,4,5,6].shift();
  // console.log(arrayShift()); // 10

  const arrayUnShift = arr => arr.unshift(7,8,9);
  // console.log(arrayUnShift([1,2,3,4,5,6])); // 9

  const arrayIndexOf = arr => arr.indexOf("language");
  // console.log(arrayIndexOf(["javascript", "is", "a", "programming", "language"])); // 4

  const arrayLastIndexOf = arr => arr.lastIndexOf("language");
  // console.log(arrayLastIndexOf(["javascript", "is", "a", "programming", "language"])); // 4

  const arrayReverse = () => ["javascript", "is", "a", "programming", "language"].reverse();
  // console.log(arrayReverse()); //  ["language", "programming", "a", "is", "javascript"]

  const arraySlice = () => ["javascript", "is", "a", "programming", "language"].slice(0,1);
  // console.log(arraySlice()); //["javascript"]

  const arraySplice = arr => arr.splice(1,2);
  //console.log(arraySplice(["Java","C","C++"])); //["C", "C++"]

  const arrayFill = arr => arr.fill(666);
  // console.log(arrayFill([1,2,3,4,5,6]));

  const arrayToString = arr => arr.toString();
  // console.log(arrayToString([1,2,3,4,5,6]));  // "1,2,3,4,5,6"

  const arrayValues = arr => {
    const iterator = arr.values();
    let val = "";
    for (const value of iterator) {
       val += value;
    }
    return val;
  }
  // console.log(arrayValues(["a","b","c","d"])); // "abcd"

  const arrayForEach = () => ["A","B","C","D"].forEach(element => console.log(element));
  // console.log(arrayForEach()); // A\nB\nC\nD

  const arrayEvery = () => [1,2,3,4,5,6].every(x => x > 0);
  //console.log(arrayEvery()); // true

  const arraySome = () => [1,2,3,4,5,6].some(x => x%2 === 0);
  // console.log(arraySome()); // true

  const arrayMap = () => [1,2,3,4,5,6].map(x => Math.pow(x,2));
  // console.log(arrayMap()); // [1, 4, 9, 16, 25, 36]

  const arrayFilter = () => [1,2,3,4,5,6].filter(x => x%2 === 0);
  // console.log(arrayFilter()); //  [2, 4, 6]

  const arrayReduce = () => [1,2,3,4,5,6].reduce((x,y) => x + y ,0);
  // console.log(arrayReduce()); //  21

  const arrayReduceRight = () => [1,2,3,4,5,6].reduceRight((x,y) => x + y ,0);
  // console.log(arrayReduceRight()); //  21

  const arrayFind = () => [1,2,3,4,5,6].find(x => x === 1);
  // console.log(arrayFind()); // 1

  const arrayFindIndex = () => [1,2,3,4,5,6].findIndex(x => x === 6);
  // console.log(arrayFindIndex()); // 5

  const arraySort = () => [14,29,37,1,5,6,2].sort((x,y) => x - y);
  // console.log(arraySort()); // [1, 2, 5, 6, 14, 29, 37]

  const arrayFrom = arr => Array.from(arr);
  // console.log(arrayFrom('foo')); // ["f", "o", "o"]

  const arrayIsArray = arr => Array.isArray(arr);
  // console.log(arrayIsArray(["Hello","World"])); // true

  const arrayOf = arr => Array.of(arr);
  // console.log(arrayOf(10)); // [10]

  const arrayCopyWithin = arr => arr.copyWithin(4,0);
  // console.log(arrayCopyWithin( ['a', 'b', 'c', 'd', 'e'])); // ["a", "b", "c", "d", "a"]

  const arrayEntries = arr => {
    let iterator = arr.entries();
    let ent = "";
    for (const key of iterator) {
        ent += key;
    }
    return ent;
  }
   // console.log(arrayEntries(['a', 'b', 'c'])); // 0,a1,b2,c

  const arrayKeys = arr => {
    let iterator = arr.keys();
    let keys = "";
    for (const key of iterator) {
        keys += key;
    }
    return keys;
  }
   // console.log(arrayKeys(['a', 'b', 'c'])); // 012

   const arrayFlat = arr => arr.flat();
   // console.log(arrayFlat([0, 1, 2, [3, 4]])); // [0, 1, 2, 3, 4]
```

# Functions

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

## Function Declaration

A function can have multiple parameters or no parameters at all.

```javascript
function validFunctionName(parameter) {
  return statement;
}
```
## Function Expression

A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name.

```javascript
const fullName = function(firstName, lastName) {
 return `${firstName} ${lastName}`;
}
fullName("Mikasa", "Ackerman"); // Mikasa Ackerman
```

## Arrow Function

An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own value.

We can write the arrow function in multiple ways:

**First:** it just looks like a regular function expression but have arrow (=>) key.

```javascript
const double = (value) => {
  return value * 2
}
double(10); // 20
```
**Second:** Omit the return keyword

```javascript
const double2 = value => value * 2;
double2(10); // 20
```

**Third:** If our function has no parameter

```javascript
const noise = () => console.log("Pling");
noise(); // Pling
````

**or**

```javascript
const noise2 = _ => console.log("Pling");
noise2(); // Pling
```
**Fourth:** If we have two or more parameter, you can must be used parenthesis

```javascript
const addAll = (x, y, z) => x + y + z;

addAll(10, 20, 30); // 60
```

**Fifth:** We can use default value in our parameters

```javascript
const multiply = (a = 2, b = 3, c = 1) => a * b * c;
multiply(2, 2, 2); // 8
multiply(2, 2);    // 4
multiply(3);       // 9
multiply();        // 6
```