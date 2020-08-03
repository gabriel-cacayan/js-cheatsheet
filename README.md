# JavaScript-Cheatsheet :octocat:

## Comments :pencil2:
```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```
## Variables
The **`var`** statement declares a **function-scoped or globally-scoped variable,** optionally initializing it to a value.

The **`let`** statement declares a **block-scoped local variable**, optionally initializing it to a value.

Constants **`const`** are **block-scoped**, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.



```javascript
var myName = "Gabriel";
let age = 20;
const BIRTHDAY = "January 7, 2000";
```

## Data Types 
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
`Object` | `var arr = ["123"];` | Special non-data but structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
`Null` | `var noValue = "";` | Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
`Function` | `function greet(){};` | This answer is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.

## Strings

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

## String Properties and Methods.

Properties | Description
------------ | -------------
 `str.length;`| The LENGTH of a string (Returns the length of a string)
