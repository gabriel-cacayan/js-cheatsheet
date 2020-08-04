# JavaScript-Cheatsheet :octocat:

## Comments :pencil2:
```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```
## Variables :floppy_disk:
The **`var`** statement declares a **function-scoped or globally-scoped variable,** optionally initializing it to a value.

The **`let`** statement declares a **block-scoped local variable**, optionally initializing it to a value.

Constants **`const`** are **block-scoped**, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.



```javascript
var myName = "Gabriel";
let age = 20;
const BIRTHDAY = "January 7, 2000";
```

## Data Types :open_file_folder:
The latest ECMAScript standard defines nine types:

`
The 6 primitives data types are undefined,string,boolean,bigint,object and symbol.
`
Data Types | Example | Description
------------ | ------------- |  -------------
`Undefined` | `var myName;` | A variable that has `not been assigned a value is of type undefined`. 
`String` | `var greet = "Hello, World!";` | The String object is `used to represent and manipulate a sequence of characters`.
`Number` | `const MATH_PI = 3.14159;` | Number is a primitive wrapper object `used to represent and manipulate numbers like 37 or -9.25`.
`Boolean` | `const bool = true;` | `True` or `False`.
`BigInt` | `const theBiggestInt = 9007199254740991n;` | BigInt is a built-in object that provides a way to represent` whole numbers larger than 253 - 1,`.
`Symbol` | Represents a unique identifier. | The data type symbol is a primitive data type. 
`Object` | `var arr = ["123"];` | A object is a collection of properties.
`Null` | `var noValue = "";` | Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
`Function` | `function greet(){};` | This answer is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.

## Strings :email:

##  Escape sequences :lock:

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

## String Properties and Methods :key: 

Properties | Description
------------ | -------------
 `str.length`|  Returns the length of a string
 
Methods | Description
------------ | -------------
 `split()`|  Splits a string into an array of substrings
 `charAt()` |  Returns the character at the specified index
 `charCodeAt()` | Returns the Unicode of the character at the specified index
 ` fromCharCodeAt()` | Converts Unicode values to characters
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

**Note: All string methods return a new value. They do not change the original variable.**

 
