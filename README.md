# Js-cheatsheet

## Comments
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
`BigInt` | `const theBiggestInt = 9007199254740991n;` | BigInt is a built-in object that provides a way to represent` whole numbers larger than 253 - 1,` which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.
`Symbol` | Represents a unique identifier. | The data type symbol is a primitive data type. 
`Object` | `var arr = ["123"];` | Special non-data but structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
`Null` | `var noValue = "";` | Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
`Function` | `function greet(){};` | This answer is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.

## Strings

##  Escape sequences

```
 
Code	Output

\'	single quote (')
\"	double quote (")
\\	backslash (\)
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
             
```
```javascript

      // escape literal quotes
      var sampleStr = 'Alan said, "Peter is learning JavaScript".'; //Alan said, "Peter is learning JavaScript"
     
      // concatenating strings
      var ourStr = "I come first. " + "I come second."; //I come first. I come second.

      // concatenating strings with +=
      var ourStr = "I come first. ";
      ourStr += "I come second."; //I come first. I come second.

      // constructing strings with variables
      var ourName = "freeCodeCamp";
      var ourStr = "Hello, our name is " + ourName + ", how are you?"; //Hello, our name is freeCodeCamp, how are you?

      // appending variables to strings
      var anAdjective = "awesome!";
      var ourStr = "freeCodeCamp is ";
      ourStr += anAdjective; //freeCodeCamp is awesome!

```
## String Properties and Methods.
```javascript
// The LENGTH of a string (Returns the length of a string)
	const stringLength = str => str.length; 
	// console.log(stringLength("hello")); //5
	
	// find the FIRST element has an index of 0
	const stringFirstIndex = str => str[0];
	// console.log(stringFirstIndex("Hello, World!")); //H

	// find the LAST character of a string
	const stringLastIndex = str => str[str.length - 1];
	// console.log(stringLastIndex("Hello, World!")); //!

	// split() (Splits a string into an array of substrings)
	const stringSplit = str => str.split("");
	// console.log(stringSplit("a string")); // ​​​​​[ 'a', ' ', 's', 't', 'r', 'i', 'n', 'g' ]​​​​​ 
	
	// join()
	const stringJoin = str => str.join("");
	// console.log(stringJoin(["a"," ","s","t","r","i","n","g"])); // a string

	// charAt() (Returns the character at the specified index) 
	const stringCharAt = str => str.charAt(0);
	// console.log(stringCharAt("Hello, World!")); //H

	// charCodeAt()  (Returns the Unicode of the character at the specified index)
	const stringCharCodeAt = str => str.charCodeAt(str);
	// console.log(stringCharCodeAt("A")); //65

	// fromCharCodeAt() (Converts Unicode values to characters)
	const stringFromCharCode = str => String.fromCharCode(str);
	// console.log(stringFromCharCode(66)); //B

	// concat()  (Joins two or more strings, and returns a new joined strings)
	const stringConcat = str => {
		var greet = "Hello ";
		return greet.concat(str);
	}
	// console.log(stringConcat("Gabriel")); // Hello Gabriel

	// startsWith() (Checks whether a string begins with specified characters)
	const stringStartsWith = str => str.startsWith("Hello");
	 // console.log(stringStartsWith("Hello, Gabriel!")); //true

	// endsWith() (Checks whether a string ends with specified string/characters)
	const stringEndsWith = str => str.endsWith("Gabriel!");
	// console.log(stringEndsWith("Hello, Gabriel!")); //true

	// includes() (Checks whether a string contains the specified string/characters)
	const stringIncludes = str => str.includes("Hello");
	// console.log(stringIncludes("This is a javascript cheatsheet made by Gabriel")); //false

	// indexOf() (Returns the position of the first found occurrence of a specified value in a string)
	const stringIndexOf = str => str.indexOf("is");
	// console.log(stringIndexOf("This is a javascript cheatsheet made by Gabriel")); //2

	// lastIndexOf() (Returns the position of the last found occurrence of a specified value in a string)
	const stringLastIndexOf = str => str.lastIndexOf("is");
	// console.log(stringLastIndexOf("This is a javascript cheatsheet made by Gabriel")); //5

	// match() (Searches a string for a match against a regular expression, and returns the matches)
	const stringMatch = str => str.match(/\d/g);
	// console.log(stringMatch("This is a javascript cheatsheet made by Gabriel on July 31")); //["3", "1"]

	// replace() (Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced)
	const stringReplace = str => str.replace(/\d/g, "5");
	 // console.log(stringReplace("July 31")); // July 55

	// repeat() (Returns a new string with a specified number of copies of an existing string)
	const stringRepeat = str => str.repeat(3);
	// console.log(stringRepeat("Javascript")); //JavascriptJavascriptJavascript

	// search() (Searches a string for a specified value, or regular expression, and returns the position of the match)
	const stringSearch = str => str.search("lit");
	// console.log(stringSearch("Javascript is lit")); //14

	// slice() (Extracts a part of a string and returns a new string)
	const stringSlice = str => str.slice(0, 10);
	// console.log(stringSlice("Javascript is lit")); //Javascript

	// substr() (Extracts the characters from a string, beginning at a specified start position, and through the specified number of character)
	const stringSubStr = str => str.substr(1, 2);
	// console.log(stringSubStr("Javascript is lit")); // av

	// substring() (Extracts the characters from a string, between two specified indices)
	const stringSubString = str => str.substring(1, 2);
	// console.log(stringSubString("Javascript is lit")); // a

	// localCompare() (method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.)
		/*
			Description
			Returns an integer indicating whether the referenceStr comes before, after or is equivalent to the compareString.
			Negative when the referenceStr occurs before compareString
			Positive when the referenceStr occurs after compareString
			Returns 0 if they are equivalent
		*/
	const stringLocaleCompare = str => str.localeCompare("c");
	// console.log(stringLocaleCompare("Hello")); // -1

	// toLocaleLowerCase() (Converts a string to lowercase letters, according to the host's locale)
	const stringToLocaleLowerCase = str => str.toLocaleLowerCase();
	// console.log(stringToLocaleLowerCase("Javascript is LIT")); // javascript is lit

	// toLocaleUpperCase() (Converts a string to uppercase letters, according to the host's locale)
	const stringToLocaleUpperCase = str => str.toLocaleUpperCase();
	// console.log(stringToLocaleUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

	// toLowerCase() (Converts a string to lowercase letters)
	const stringToLowerCase = str => str.toLowerCase();
	// console.log(stringToLowerCase("Javascript is LIT")); // javascript is lit

	// toUpperCase() (Converts a string to uppercase letters)
	const stringToUpperCase = str => str.toUpperCase();
	// console.log(stringToUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

	// toString() (Returns the value of a String object)
	const stringToString = str => str.toString();
	// console.log(stringToString(["j","s"])); // j,s

	// trim() (Removes whitespace from both ends of a string)
	const stringTrim = str => str.trim();
	// console.log(stringTrim("      Hello")); // Hello

	// valueOf() (Returns the primitive value of a String object)
	const stringValueOf = str => str.valueOf();
	console.log(stringValueOf("Hello, World!")); // Hello, World!

	// Note: All string methods return a new value. They do not change the original variable.

```
