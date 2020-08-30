# :fire: JS-Cheatsheet :octocat:

### Javascript is a "high-level single-threaded, garbage-collected, interpreted (or just-in-time compiled),  prototype-based, multi-paradigm, dynamic language with a non-blocking event loop"

* What does **Multi-paradigm** means ? it is a way of thinking about software construction based on some fundamental, defining principles. **Example:** **_functional programming_**,**_object oriented programming_** and **_procedural programming_**.

# Table of Contents
- [Introduction](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#fire-js-cheatsheet-octocat)
  - [Variables](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#variables)
  - [Scope](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#scope)
  - [Hoisting](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#hoisting)
      - [Variable Hoisting](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#variable-hoisting)
      - [Function Hoisting](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-hoisting)
- [Data Types](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#data-types)
  - [Primitives](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#primitives)
- [Operators](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#operators)
  - [Destructuring](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#destructuring)
  - [Spread Operator](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#spread-operator)
- [Strings](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#strings)
  - [Basics](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#basics)
  - [Template String](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#template-string)
  - [Escape Sequences](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#escape-sequences)
  - [String Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#string-properties-and-methods)
      - [String Properties and Methods Example:](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#string-properties-and-methods-example)
- [Regular Expressions](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#regular-expressions)
  - [Regex Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#regex-methods)
  - [Sample Code](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#sample-code)
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
- [Arrays](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#arrays)
  - [Array Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#array-properties-and-methods)
      - [Array Properties and Methods Example:](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#array-properties-and-methods-example)
      - [Sample Code](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#sample-code-1)
- [Functions](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#functions)
  - [Function Declaration](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-declaration)
  - [Function Expression](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-expression)
  - [Function parameters](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#function-parameters)
     - [Default parameters](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#default-parameters)
     - [Rest parameters](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#rest-parameters)
  - [Arrow Function](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#arrow-function)
  - [Closures](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#closures)
  - [Higher Order Functions](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#higher-order-functions)
     - [Sample Code](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#sample-code-2)
- [Numbers](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#numbers)
  - [Number Object](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#number-object)
    - [Number Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#number-properties-and-methods)
  - [Math Object](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#math-object)
    - [Math Properties and Methods](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#math-properties-and-methods)
    - [Sample Code](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#sample-code-3)
- [Object](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#object)
    - [Object Literal](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#object-literal)
    - [Object-Oriented Programming](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#object-oriented-programming)
        - [Other ways to create object instances](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#other-ways-to-create-object-instances)
    - [Object Prototypes](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#object-prototypes)

## Variables

* `var` statement declares a function-scoped or globally-scoped variable, can be redeclared or reassigned.
* `let` statement declares a block-scoped local variable, can't be redeclared but it can reassigned. 
* `const` are block-scoped, much like variables defined using the `let` keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.

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

## Scope

* **Global scoped:** occurred when the variable declared outside the function. The variable is accessible anywhere.

* **Function** or **Local scoped:** occurred when the variable declared within the function. The variable declared within the function is accessible only inside the function.

* **Block scoped:** occurred when the variable declared within the curly braces `{}` For example: if..else or for loop. The variable is accessible only inside the curly braces.

## Hoisting

### Variable hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception.

This concept is known as **_hoisting_**. Variables in JavaScript are, in a sense, **_"hoisted"_** (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of `undefined`. So even if you declare and initialize after you use or refer to this variable, it still returns `undefined`.

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

> **Note:** function hoisting only works with function declarations—not with function expressions.

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

> **Explanation:**  If you hoist (call) your variable before defining it, it will say undefined.It's first needs to be defined and then called. But functions by themselves can be hoisted at the top (not in case of being declared in a variable) so if you call a function before declaring it it will work. But not in variable AT ANY CASE.

# Data Types
The latest ECMAScript standard defines eight data types:

## Primitives 
The 7 primitives data types are `undefined,string,boolean,bigint,null,object and symbol.`

Data Types | Example | Description
------------ | ------------- |  -------------
`undefined` | `let myName;` | A variable that has `not been assigned a value is of type undefined`. 
`string` | `let greet = "Hello, World!";` | The String object is `used to represent and manipulate a sequence of characters`.
`number` | `const MATH_PI = 3.14159;` | Number is a primitive wrapper object `used to represent and manipulate numbers like 37 or -9.25`.
`boolean` | `const bool = true;` | `True` or `False`.
`bigInt` | `const theBiggestInt = 9007199254740991n;` | BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1,.
`null` | `let noValue = "";` | Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
`symbol` | Represents a unique identifier. | (new in ECMAScript 2015). A data type whose instances are unique and immutable
`object` | `let arr = ["123"];` | A object is a collection of properties.

# Operators

Arithmetic | Assignment | Comparison | Logical
------------ | ------------- | ------------- | -------------
Remainder `%`| Assignment `=` | Equal to `==` | Logical AND `&&`
Increment `++` | Addition assignment `+=` | Not equal `!=` | Logical NOT `!`
Decrement `--`| Subtraction assignment `-=` | Strict equal `===` | Logical OR `ll`
Unary negation `-` | Multiplication assignment `*=` | strict not equal `!==` |
Unary plus `+`| Division assignment `/=` | Greater than `>` |
Exponentiation operator `**` | Remainder assignment `%=` | Greater than or equal `>=` |
Addition `+` |  | Less than `<`
Subtraction `-` |  | Less than or equal `<=`
Multiplication `*` | |
Division `/` | |

> **Note:** The logical OR syntax is double pipeline **`||`** and not in the table.

Bitwise | Example | Description
------------ | ------------- | -------------
Bitwise AND `&` | a `&` b | Returns 0 if the corresponding bits of both sides of the bitwise operator are 1, at least one of them is 0.
Bitwise OR `l` | a `l` b | Returns 1 if at least one of the corresponding bits of both sides of the bitwise operator is 1.
Bitwise XOR `^` | a `^` b | Returns 1 if only one of the corresponding bits of both sides of the bitwise operator is 1.
Bitwise NOT `~` | `~` a | Reverses the bits of the operand.
Left shift `<<` | a `<<` b | ab Adding bit 0 to the  right (<32) of the binary number  shifts to the left.
Sign-propagating right shift `>>` | a `>>` b | a The binary state bof the number (<32) shifts to the right by one bit. Shifts by adding b 0s for positive numbers and 1 for negative numbers.
Zero-fill right shift `>>>` | a `>>>` b | ab(<32) bit to the right  of the binary representation  of the a number , badds 0s to the left of the number regardless of whether the number is positive or negative  .

> **Note:** The Bitwise OR syntax is single pipeline **`|`** and not in the table.

## Destructuring

The **_destructuring assignment_** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```javascript
// Array Example:
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;

// Skipping some element using comma
var foo = ["A","B","C","D","E","F"];
var [one,,, three] = foo; // D
console.log(three);

// Using spread operator(syntax)
var foo = ["A","B","C","D","E","F"];
var [one, ...rest] = foo; 
console.log(rest); // ["B", "C", "D", "E", "F"]

// Combining two arrays, also you can do this by using concat method.
var foo = ["A","B","C","D","E","F"];
var num = [1,2,3,4,5,6];
var newArray = [...foo, ...num]; 

console.log(newArray); // ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6]

// Object Example:
const user = {
    id: 42,
    is_verified: true,
    name: "Gabriel",
    age: 20
};

const {id, is_verified} = user;

console.log(id; // 42
console.log(is_verified); // true

// Or you can pass the property value to another variable
const {id:ID, is_verified:ID_V} = user;

console.log(ID); // 42
console.log(ID_V); // true

// Using spread operator(syntax) to the objects
const {id, ...rest} = user;

console.log(rest); //  {is_verified: true, name: "Gabriel", age: 20}
```
## Spread Operator

**_Spread syntax_** `...` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));// expected output: 6
```

> **Explanation:** The spread operator allows us to expand elements. With rest parameters we were able to get a list of arguments into an array. spread operators however, let us unpack elements in an array to single/individual arguments.

# Strings

**_String_** is a sequence of characters.

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

**_Template string_** is new to JavaScript, it is introduced to ES6. Syntax: ``` `${variable}` ``` 

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

### String Properties and Methods Example:

```javascript
// STRING PROPERTIES

// Returns length
const stringLength = () => "Javascript".length; //10

// Returns first index
const stringFirstIndex = str => str[0]; 
// console.log(stringFirstIndex("Hello, World!")); //H

// Returns last index 
const stringLastIndex = str => str[str.length - 1]; 
// console.log(stringLastIndex("Hello, World!")); //!

// STRING METHODS
const stringSplit = () => "string".split(""); // ​​​​​[ 's', 't', 'r', 'i', 'n', 'g' ]​​​​​ 

const stringConcat = () => "Hello, ".concat("Gabriel"); // Hello, Gabriel

const stringRepeat = ()=> "Javascript".repeat(3); //JavascriptJavascriptJavascript

const stringSlice = () => "Javascript is lit".slice(0, 10); //Javascript

//Return the character or character code at the specified position in string.
const stringCharAt = str => str.charAt(0); // console.log(stringCharAt("Hello, World!")); // H
const stringCharCodeAt = () => "A".charCodeAt(str); // 65
const stringCodePointAt = () => "B".codePointAt(0); // 66

// Constructs a string from the specified sequence of Unicode values. This is a method of the String class, not a String instance.
const stringFromCharCode = () => String.fromCharCode(66); // B
const stringFromCodePoint = () => String.fromCodePoint(65); // A

// Returns whether or not the string starts, ends or contains a specified string.
const stringStartsWith = () => "Hello, Gabriel!".startsWith("Hello"); //true
const stringEndsWith = () => "Hello, Gabriel!".endsWith("Gabriel!");  //true
const stringIncludes = () => "Javascript is easy to learn".includes("Python"); //false

// Return the position of specified substring in the string or last position of specified substring, respectively.
const stringIndexOf = () => "This is a javascript cheatsheet".indexOf("is"); //2
const stringLastIndexOf = () => "This is a javascript cheatsheet".lastIndexOf("is"); //5

// Work with regular expressions.
const stringMatch = () => "This is a javascript cheatsheet made by Gabriel on July 31".match(/\d/g); //["3", "1"]
const stringReplace = () => "July 31".replace(/\d/g, "5"); // July 55
const stringSearch = () => "Javascript is lit".search("lit"); //14

// Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.
const stringSubStr = () => "Javascript is lit".substr(1, 2); // av
const stringSubString = () => "Javascript is lit".substring(1, 2); // a

// Return the string in all lowercase or all uppercase, respectively.
const stringToLocaleLowerCase = () => "Javascript is LIT".toLocaleLowerCase(); // javascript is lit
const stringToLocaleUpperCase = () => "Javascript is LIT".toLocaleUpperCase(); // JAVASCRIPT IS LIT
const stringToLowerCase = () => "Javascript is LIT".toLowerCase(); // javascript is lit
const stringToUpperCase = () => "Javascript is LIT".toUpperCase(); // JAVASCRIPT IS LIT

const stringLocaleCompare = () => "Hello".localeCompare("c");  // -1

const stringToString = () => ["j","s"].toString();  // js

const stringTrim = () => "      Hello".trim(); // Hello

const stringValueOf = () => "Hello, World!".valueOf(); // Hello, World!
```
# Regular Expressions

**_Regular expressions_** are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

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

> **Note:** The OR syntax is single pipeline **`|`** and not in the table.

## Regex Methods
Method	 | Description
------------ | -------------
`test()`| Returns true or false if the pattern match a string or not.
`match()`| Extract the actual matches found.
`replace()`| Search and replace text in a string .

### Sample Code

```javascript
// test method returns true or false if the pattern match a string or not
const greeting = /Hello/.test("Hello, World!"); // true

// extract the matches of a regex with the match method
const matching = "Extract the word 'coding' from this string.".match(/coding/); // ["coding"]

// Search and replace
const replacing = "The sky is silver.".replace(/silver/, "blue"); // "The sky is blue."

// search for multiple patterns using the alternation or OR operator: |
const pet = /dog|cat|bird|fish/.test("James has a pet cat."); // true

// ignore upper or lowercase using flag i
const ignore = /freeCodeCamp/i.test("freeCodeCamp"); // true

// Search or extract a pattern more than once, using multiple flags
const twinkle = "Twinkle, twinkle, little star".match(/Twinkle/gi); // ["Twinkle", "twinkle"]

// The wildcard character . will match any character except new lines.
const wildCard = /.un/.test("Let's have fun with regular expressions!"); // true

// define the characters to match, in this example all the vowels in quoteSample
const bugs =  "Beware of bugs in the above code; I have only proved it correct, not tried it.".match(/[aeiou]/gi);
// ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]

// Match all the characters in quoteSample (between a and z)
const getChar = "The quick brown fox jumps over the lazy dog.".match(/[a-z]/gi);
// ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]

// Match all the character between two characters and numbers
const blueBerry = "Blueberry 3.141592653s are delicious.".match(/[h-s2-6]/gi);
//  ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]

// Match all that is not a number or a vowel
const mice = "3 blind mice.".match(/[^aeiou0-9]/gi); // [" ", "b", "l", "n", "d", " ", "m", "c", "."]

// Match 1 or more occurrences of the previous character (* for 0 or more)
const mp = "Mississippi".match(/s+/g); //  ["ss", "ss"]

// ? Match 0 or 1 occurrence of the previous character. Useful for Lazy matching
const titanic = "titanic".match(/t[a-z]*?i/); // ["ti"]

// Search for patterns at the beginning of strings
const cal = /^Cal/.test("Cal and Ricky both like racing."); // true

// Search for patterns at the end of a string
const caboose = /caboose$/.test("The last car on a train is the caboose"); // true

// \w is equal to [A-Za-z0-9_]
const wizards = "The five boxing wizards jump quickly.".match(/\w/g).length; // 31

// Match only 3 to 6 letter h's in the word "Oh no"
const ohhh = /Oh{3,6} no/.test("Ohhh no"); // true

// Match both the American English (favorite) and the British English (favourite) version of the word
const fav = /favou?rite/.test("favorite"); // true

// Groups () let you reuse patterns, every 1 represent the group (\d+)
const groups = /^(\d+)\s\1\s\1$/.test("42 42 42"); // true

// Remove all the spaces at the beginning an end of a string
const removeSpaces = "   Hello, World!  ".replace(/^\s+(.*\S)\s+$/, '$1'); // 'Hello, World!'
```

# Conditional Statements

**_Conditional statements_** allow us to represent such decision making in JavaScript, from the choice that must be made.

## if...else statements

Basic **_if...else syntax_** looks like the following in [pseudocode:](https://developer.mozilla.org/en-US/docs/Glossary/pseudocode)

```javascript
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

## switch statements

**_Switch statements_** take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

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

**_Ternary_** or **_conditional operator_** is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you simply have two choices that are chosen between via a true/false condition. The pseudocode looks like this:

```javascript
  ( condition ) ? run this code : run this code instead;
```

```javascript
var status = (age >= 18) ? 'adult' : 'minor';
````

# Loop

Programming loops are all to do with doing the same thing over and over again — which is termed iteration in programming speak.

## for loop

```javascript
for (initializer; condition; final-expression) {
  // code to run
}
```

## for...of statement

The **_for...of statement_** creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```javascript
for (variable of iterable) {
  //statement
}
```

## for...in statement

The **_for...in statement_** iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

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

The **_break statement_** terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

Example:
```javascript
const num = 5;

  for (let i = 0; i < num; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);  
  }

// 0 1 2
```

## continue

The **_continue statement_** terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

Example:
```javascript
const num = 5;

  for (let i = 0; i < num; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);  
  }

// 0 1 2 4
```

# Arrays

**_Arrays_** are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.

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

### Array Properties and Methods Example:

```javascript
// ARRAY PROPERTIES
const arrayLength = () =>["javascript", "is", "a", "programming", "language"].length; // 5

// ARRAY METHODS
const arrayConcat = arr => [1,2,3].concat(arr);
// console.log(arrayConcat([4,5,6])); // [1, 2, 3, 4, 5, 6]

const arrayIncludes = () => [1,2,3,4,5,6].includes(2); // true

const arrayJoin = () => ["javascript", "is", "cool"].join(" "); // javascript is cool

// Add or Remove a value to the last index;
const arrayPop = () => [1,2,3].pop(); // 3
const arrayPush = () =>  ["Hello"].push("Gabriel"); // 2

// Add or Remove a value to the first index;
const arrayShift = () => [10,2,3,4,5,6].shift(); // 10
const arrayUnShift = () => [1,2,3,4,5,6].unshift(7,8,9); // 9

// Search for the index
const arrayIndexOf = () => ["javascript", "is", "a", "programming", "language"].indexOf("language"); // 4
const arrayLastIndexOf = () => ["javascript", "is", "a", "programming", "language"].lastIndexOf("language"); // 4

const arrayReverse = () => ["javascript", "is", "a", "programming", "language"].reverse(); 
//  ["language", "programming", "a", "is", "javascript"]

const arraySlice = () => ["javascript", "is", "a", "programming", "language"].slice(0,1); // ["javascript"]

const arraySplice = () => ["Java","C","C++"].splice(1,2); // ["C", "C++"]

const arrayFill = () => [1,2,3,4,5,6].fill(6); // [6, 6, 6, 6, 6, 6]

const arrayToString = () => [1,2,3,4,5,6].toString(); // "1,2,3,4,5,6"

const arrayValues = arr => {
  const iterator = arr.values();
  let val = "";
      for (const value of iterator) {
        val += value;
      }
      return val;
  }
// console.log(arrayValues(["a","b","c","d"])); // "abcd"

const arrayFrom = () => Array.from("foo"); // ["f", "o", "o"]

const arrayIsArray = () => Array.isArray([1,2,3]); // true

const arrayOf = () => Array.of(10);  // [10]

const arrayCopyWithin = () => ['a', 'b', 'c', 'd', 'e'].copyWithin(4,0); // ["a", "b", "c", "d", "a"]

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

const arrayFlat = () => [0, 1, 2, [3, 4]].flat(); // [0, 1, 2, 3, 4]
```
These are the array methods that takes a function as an argument.[Higher Order Functions:](https://github.com/GabrielCode-Full/js-cheatsheet/blob/master/README.md#higher-order-functions)

```javascript
const arrayForEach = () => ["A","B","C","D"].forEach(element => console.log(element)); // A\nB\nC\nD
const arrayEvery = () => [1,2,3,4,5,6].every(x => x > 0); // true
const arraySome = () => [1,2,3,4,5,6].some(x => x%2 === 0); // true
const arrayMap = () => [1,2,3,4,5,6].map(x => Math.pow(x,2));  // [1, 4, 9, 16, 25, 36]
const arrayFilter = () => [1,2,3,4,5,6].filter(x => x%2 === 0);  // [2, 4, 6]
const arrayReduce = () => [1,2,3,4,5,6].reduce((x,y) => x + y ,0); // 21
const arrayReduceRight = () => [1,2,3,4,5,6].reduceRight((x,y) => x + y ,0); // 21
const arrayFind = () => [1,2,3,4,5,6].find(x => x === 1); // 1
const arrayFindIndex = () => [1,2,3,4,5,6].findIndex(x => x === 6); // 5
const arraySort = () => [14,29,37,1,5,6,2].sort((x,y) => x - y); // [1, 2, 5, 6, 14, 29, 37]
```
### Sample Code:

```javascript
// Removing duplicates from array

const arr = [1,2,2,3,4,5,6,10,10];

const removeDuplicates = [...new Set(arr)];

console.log(removeDuplicates); // [1, 2, 3, 4, 5, 6, 10]


// Checking whether the word is palindrome
function checkPalindrome(palindrome) {

  // Checking whether the given variable is palindrome or not
  const checked = palindrome.split("").reverse().join(""); 

  // Using ternary operator to check, if is it palindrome or not.
  return checked === palindrome ? "It is a palindrome!": "It is not palindrome!"; 
}

console.log(checkPalindrome("racecar"));
```

# Functions

**_Functions_** are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

## Function Declaration

A function can have multiple parameters or no parameters at all.

```javascript
function validFunctionName(parameter) {
  return statement;
}
```

## Function Expression

A **_Function Expressions_** defines a named or anonymous function. An anonymous function is a function that has no name.

```javascript
const fullName = function(firstName, lastName) {
 return `${firstName} ${lastName}`;
}
fullName("Mikasa", "Ackerman"); // Mikasa Ackerman
```

## Function parameters 

Starting with ECMAScript 2015, there are two new kinds of parameters: **_default parameters_** and **_rest parameters_**.

### Default parameters

In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

With **_default parameters_**, a manual check in the function body is no longer necessary. You can simply put 1 as the default value for b in the function head:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```
### Rest parameters

The **_rest parameter syntax_** allows us to represent an **indefinite** number of arguments as an array.

In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow Function

An **_Arrow Function Expression_** is a shorter syntax for writing function expressions. Arrow functions do not create their own value.

We can write the arrow function in multiple ways:

```javascript
// First: it just looks like a regular function expression but have arrow (=>) key.
const double = (value) => {
  return value * 2
}
double(10); // 20

// Second: Omit the return keyword
const double2 = value => value * 2;
double2(10); // 20

// Third: If our function has no parameter
const noise = () => console.log("Pling");
noise(); // Pling

// or

const noise2 = _ => console.log("Pling");
noise2(); // Pling

// Fourth: If we have two or more parameter, you must use parenthesis.
const addAll = (x, y, z) => x + y + z;
addAll(10, 20, 30); // 60

// Fifth: We can use default value in our 
const multiply = (a = 2, b = 3, c = 1) => a * b * c;
multiply(2, 2, 2); // 8
multiply(2, 2);    // 4
multiply(3);       // 9
multiply();        // 6
```

## Closures

**_Closures_** are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

```javascript
const pet = function(name) {   // This is the outer function

  const greetPet = function(greet) { // This is the inner function

    return `${greet}, ${name}`;    // The inner function has access to the outer's variable.     
  }
  return greetPet;            // calling the inner function
}

const greetings = pet("Oreo")("Hello");
console.log(greetings); // "Hello, Oreo"
```

## Higher Order Functions

A **_higher-order function_** is a function that can take another function as an argument, or that returns a function as a result.

These are the array methods that take another function as an argument and returns a function as a result: **_forEach_**,**_map_**,**_filter_**,**_reduce_**,**_sort_**,**_some_**,**_every_**,**_find_**, and **_findIndex_** 

### Sample Code 

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];
const returnElement = numbers.forEach(x => console.log(x)); // 0 1 2 3..
const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers.reduce((prev, next) => prev + next, 0); // 21
const greaterThanFour = numbers.find(n => n > 4); // 5
```

```javascript
// Returning the name's property from the hash table;
const rooms = [
	{name: "Room1", description: "Clean", completed: "2020"},
	{name: "Room2", description: "Big", completed: "2021"},
	{name: "Room3", description: "Small", completed: "2022"} ];
  
console.log(rooms.map(room => room.name)); // ["Room1", "Room2", "Room3"]
```
# Numbers

## Number object

### Number Properties and Methods

The built-in Number object has properties for numerical constants, such as maximum value, not-a-number, and infinity. You cannot change the values of these properties and you use them as follows:

```javascript
const BIGGEST_NUM = Number.MAX_VALUE;
const SMALLEST_NUM = Number.MIN_VALUE;
const INFINITE_NUM = Number.POSITIVE_INFINITY;
const NEG_INFINITE_NUM = Number.NEGATIVE_INFINITY;
const NOT_A_NUMBER = Number.NaN;
```

Property | Description
------------ | ------------- 
`Number.MAX_VALUE` | The largest representable number (±1.7976931348623157e+308)
`Number.MIN_VALUE`| The smallest representable number (±5e-324)
`Number.NaN`| Special "not a number" value
`Number.NEGATIVE_INFINITY`| Special negative infinite value; returned on overflow
`Number.POSITIVE_INFINITY`| Special positive infinite value; returned on overflow
`Number.EPSILON`| Difference between 1 and the smallest value greater than 1 that can be represented as a Number (2.220446049250313e-16)
`Number.MIN_SAFE_INTEGER`| Minimum safe integer in JavaScript (−253 + 1, or −9007199254740991)
`Number.MAX_SAFE_INTEGER`| Maximum safe integer in JavaScript (+253 − 1, or +9007199254740991)

Methods | Description
------------ | ------------- 
`Number.parseFloat()` | Parses a string argument and returns a floating point number.Same as the global `parseFloat()` function.
`Number.parseInt()` | Parses a string argument and returns an integer of the specified radix or base. Same as the global `parseInt()` function.
`Number.isFinite()` | Determines whether the passed value is a finite number.
`Number.isInteger()` | Determines whether the passed value is an integer.
`Number.isNaN()` | Determines whether the passed value is NaN. More robust version of the original global `isNaN()`.
`Number.isSafeInteger()` | Determines whether the provided value is a number that is a safe integer.
`toExponential()`| Returns a string representing the number in exponential notation.
`toFixed()`| Returns a string representing the number in fixed-point notation.
`toPrecision()`| Returns a string representing the number to a specified precision in fixed-point notation.

### Using Number.isFinite

```javascript
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, would've been true with
                            // global isFinite('0')
Number.isFinite(null);      // false, would've been true with
                            // global isFinite(null)
```
### Using Number.isInteger
```javascript
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
```
### Using Number.isNaN

```javascript
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```
### Using Number.isSafeInteger

```javascript
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
```

## Math object

### Math Properties and Methods

Property | Description
------------ | ------------- 
`Math.PI` | The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
`Math.E`| Euler's constant and the base of natural logarithms; approximately 2.718.
`Math.LN2`| Natural logarithm of 2; approximately 0.693.
`Math.LN2`| Natural logarithm of 10; approximately 2.303.
`Math.LOG2E`| Base-2 logarithm of E; approximately 1.443.
`Math.LOG10E`| Base-10 logarithm of E; approximately 0.434.
`Math.SQRT1_2`| Square root of ½ (or equivalently, 1/√2); approximately 0.707.
`Math.SQRT2`| Square root of 2; approximately 1.414.

Methods | Description
------------ | ------------- 
`Math.abs()`| Absolute value
`Math.sin()`,`Math.cos()`|`Math.tan()`| Standard trigonometric functions; with the argument in radians.
`Math.asin()`,`Math.acos()`,`Math.atan()`,`Math.atan2()`| Inverse trigonometric functions; return values in radians.
`Math.sinh`,`Math.acosh`,`Math.atanh`| Hyperbolic functions; argument in hyperbolic angle.
`Math.asinh`,`Math.acosh`,`Math.atanh`| Inverse hyperbolic functions; return values in hyperbolic angle.
`Math.pow()`,`Math.exp()`,`Math.expm1()`, | Exponential and logarithmic functions.
`Math.log10()`,`Math.log1p()`,`Math.log2()` | 
`Math.floor()`,`Math.ceil()`| Returns the largest/smallest integer less/greater than or equal to an argument.
`Math.min()`,`Math.max()`| Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
`Math.random()`| Returns a random number between 0 and 1.
`Math.round()`,`Math.fround()`,`Math.trunc()`| Rounding and truncation functions.
`Math.sqrt()`,`Math.cbrt()`,`Math.hypot()`| Square root, cube root, Square root of the sum of square arguments.
`Math.sign()`| The sign of a number, indicating whether the number is positive, negative or zero.
`Math.clz32()`,`Math.imul()`| Number of leading zero bits in the 32-bit binary representation. The result of the C-like 32-bit multiplication of the two arguments.

### Sample Code

```javascript
const mathPow = () => Math.pow(4,2); // 16
const mathFloor = () => Math.floor(5.95); // 5
const mathCeil = () => Math.ceil(5.10); // 6
const mathMin = math => Math.min(...math); // 1, Using spread operator (spread turns array into a list of arguments).
// console.log(mathMin([1,3,5,7,2,10]));
const mathMax = math => Math.max(...math); // 69
// console.log(mathMax([1,3,5,7,69,10]));
const mathRandom = () => Math.random(); // Random numbers between 0 to 1.
const mathRound = () => Math.round(5.5); // 6 Rounds off if the decimal is greater then 4.
const mathSqrt = () => Math.sqrt(16);  // 4
const mathCbrt = () => Math.cbrt(64); // 4	
const mathSign = () => Math.sign(30); // 1
const mathImul = () => Math.imul(10,5); // 50 (10 x 5)
```

# Object

An **_object_** is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called **properties** and **methods** when they are inside objects.)

## Object Literal

```javascript
// Part 1: Object Literal
const person1 = {
	name: "Gabriel",
	age: 20,
	progLang: "javascript",
	greet: function() {
		return `My name is ${this.name} and I'm ${this.age} yrs old and my programming langugae is ${this.progLang}.`
	};
}
console.log(person1.greet()); // My name is Gabriel and I'm 20 yrs old and my programming langugae is javascript.
```

## Object-Oriented Programming

The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

1. **Encapsulation** — Object data (and often, functions too) can be stored neatly.
2. **Abstraction** — creating a simple model of a more complex thing
3. **Object instances** — objects that contain the data and functionality defined in the class. 

```javascript
// Part 2: Constructor

// This is called (CONSTRUCTOR)
function Person(first,last,age,gender) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.gender = gender;
	this.bio = function() {
		return `Hello, my name is ${this.first} ${this.last} and I'm ${this.age} yrs old, and my gender is ${this.gender}.`
	};
}

// INSTANTIATION

//	When an object instance is created the contructor function is run to create it.
const person5 = new Person("Mikasa","Ackerman",19,"Female"); // This is called (OBJECT INSTANCE)
console.log(person5.bio()); // Hello, my name is Mikasa Ackerman and I'm 19 yrs old, and my gender is Female.

const person6 = new Person("Monkey D.","Luffy",18,"Male");
console.log(person6.bio()); // Hello, my name is Monkey D. Luffy and I'm 18 yrs old, and my gender is Male.
```
> **Explanation:** When an object instance is created from a class, the class's constructor function is run to create it. This process of creating an object instance from a class is called instantiation — the object instance is instantiated from the class.

### Other ways to create object instances

So far we've seen two different ways to create an object instance — declaring an object literal, and using a constructor function (see above).

These make sense, but there are other ways — we want to make you familiar with these in case you come across them in your travels around the Web.

* The **Object()** constructor

First of all, you can use the **_Object()_** constructor to create a new object. Yes, even generic objects have a constructor, which generates an empty object.

```javascript
let person1 = new Object();

person1.name = 'Chris';
person1.age = 38;
person1.greeting = function() {
	return `Hi, I'm ${this.name} and I'm ${this.age}`;
};
console.log(person1.greeting()); // Hi, I'm Chris and I'm 38
```

* Using the **create()** method

Constructors can help you give your code order—you can create constructors in one place, then create instances as needed, and it is clear where they came from.

```javascript
const person2 = Object.create(person1);
person2.name = "Mikasa";
person2.age = 17;
// console.log(person2.greet());
```

## Object Prototypes

**_Prototypes_** are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains work and look at how the prototype property can be used to add methods to existing constructors.

```javascript
// Part 3: Prototypes
function Person(first,last,age,gender) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.gender = gender;
}

const person5 = new Person("Mikasa","Ackerman",19,"Female");

Person.prototype.fullName = function(){
	return `${this.first} ${this.last}`;
}
console.log(person5.fullName()); // Mikasa Ackerman
```
