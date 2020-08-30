	// Javascript CheatSheet made by Gabriel.

	//	STRING PROPERTIES
	
	// The LENGTH of a string (Returns the length of a string)
	const stringLength = () => "Javascript".length; // console.log(stringLength()); //10
	
	// find the FIRST element has an index of 0
	const stringFirstIndex = str => str[0]; // console.log(stringFirstIndex("Hello, World!")); //H

	// find the LAST character of a string
	const stringLastIndex = str => str[str.length - 1];// console.log(stringLastIndex("Hello, World!")); //!

	//	STRING METHODS

	// split() (Splits a string into an array of substrings)
	const stringSplit = str => str.split(""); // console.log(stringSplit("string")); // ​​​​​[ 's', 't', 'r', 'i', 'n', 'g' ]​​​​​ 
	
	// charAt() (Returns the character at the specified index) 
	const stringCharAt = str => str.charAt(0); // console.log(stringCharAt("Hello, World!")); //H

	// charCodeAt()  (Returns the Unicode of the character at the specified index)
	const stringCharCodeAt = str => str.charCodeAt(str); // console.log(stringCharCodeAt("A")); //65

	//codePointAt() (Returns a non-negative integer that is the Unicode code point value.)
	const codePointAt = str => str.codePointAt(0); //console.log(codePointAt("B")); //66

	// String.fromCharCodeAt() (Converts Unicode values to characters)
	const stringFromCharCode = str => String.fromCharCode(str);
	// console.log(stringFromCharCode(66)); //B

	// String.fromCodePoint() (Returns a string created by using the specified sequence of code points.)
	const stringFromCodePoint = str => String.fromCodePoint(str); //console.log(stringFromCodePoint(65)); //A

	// concat()  (Joins two or more strings, and returns a new joined strings)
	const stringConcat = str => "Hello, ".concat(str); // console.log(stringConcat("Gabriel")); // Hello, Gabriel

	// startsWith() (Checks whether a string begins with specified characters)
	const stringStartsWith = str => str.startsWith("Hello"); // console.log(stringStartsWith("Hello, Gabriel!")); //true

	// endsWith() (Checks whether a string ends with specified string/characters)
	const stringEndsWith = str => str.endsWith("Gabriel!"); // console.log(stringEndsWith("Hello, Gabriel!")); //true

	// includes() (Checks whether a string contains the specified string/characters)
	const stringIncludes = str => str.includes("Python");// console.log(stringIncludes("Javascript is easy to learn")); //false

	// indexOf() (Returns the position of the first found occurrence of a specified value in a string)
	const stringIndexOf = str => str.indexOf("is"); // console.log(stringIndexOf("This is a javascript cheatsheet")); //2

	// lastIndexOf() (Returns the position of the last found occurrence of a specified value in a string)
	const stringLastIndexOf = str => str.lastIndexOf("is"); //console.log(stringLastIndexOf("This is a javascript cheatsheet")); //5

	// match() (Searches a string for a match against a regular expression, and returns the matches)
	const stringMatch = str => str.match(/\d/g); // console.log(stringMatch("This is a javascript cheatsheet made by Gabriel on July 31")); //["3", "1"]

	// replace() (Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced)
	const stringReplace = str => str.replace(/\d/g, "5"); // console.log(stringReplace("July 31")); // July 55

	// repeat() (Returns a new string with a specified number of copies of an existing string)
	const stringRepeat = str => str.repeat(3); // console.log(stringRepeat("Javascript")); //JavascriptJavascriptJavascript

	// search() (Searches a string for a specified value, or regular expression, and returns the position of the match)
	const stringSearch = str => str.search("lit");// console.log(stringSearch("Javascript is lit")); //14

	// slice() (Extracts a part of a string and returns a new string)
	const stringSlice = str => str.slice(0, 10); // console.log(stringSlice("Javascript is lit")); //Javascript

	// substr() (Extracts the characters from a string, beginning at a specified start position, and through the specified number of character)
	const stringSubStr = str => str.substr(1, 2); // console.log(stringSubStr("Javascript is lit")); // av

	// substring() (Extracts the characters from a string, between two specified indices)
	const stringSubString = str => str.substring(1, 2); // console.log(stringSubString("Javascript is lit")); // a

	// localCompare() (method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.)
		/*
			Description
			Returns an integer indicating whether the referenceStr comes before, after or is equivalent to the compareString.

			Negative when the referenceStr occurs before compareString
			Positive when the referenceStr occurs after compareString
			Returns 0 if they are equivalent
		*/
	const stringLocaleCompare = str => str.localeCompare("c"); // console.log(stringLocaleCompare("Hello")); // -1

	// toLocaleLowerCase() (Converts a string to lowercase letters, according to the host's locale)
	const stringToLocaleLowerCase = str => str.toLocaleLowerCase(); // console.log(stringToLocaleLowerCase("Javascript is LIT")); // javascript is lit

	// toLocaleUpperCase() (Converts a string to uppercase letters, according to the host's locale)
	const stringToLocaleUpperCase = str => str.toLocaleUpperCase(); // console.log(stringToLocaleUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

	// toLowerCase() (Converts a string to lowercase letters)
	const stringToLowerCase = str => str.toLowerCase(); // console.log(stringToLowerCase("Javascript is LIT")); // javascript is lit

	// toUpperCase() (Converts a string to uppercase letters)
	const stringToUpperCase = str => str.toUpperCase(); // console.log(stringToUpperCase("Javascript is LIT")); // JAVASCRIPT IS LIT

	// toString() (Returns the value of a String object)
	const stringToString = str => str.toString(); // console.log(stringToString(["j","s"])); // j,s

	// trim() (Removes whitespace from both ends of a string)
	const stringTrim = str => str.trim(); // console.log(stringTrim("      Hello")); // Hello

	// valueOf() (Returns the primitive value of a String object)
	const stringValueOf = str => str.valueOf(); // console.log(stringValueOf("Hello, World!")); // Hello, World!

	// Note: All string methods return a new value. They do not change the original variable.

	// matchAll() (Returns an iterator of all results matching a string against a regular expression, including capturing groups.)
	// const stringMatchAll = str => str.matchAll(/(cats|dogs|bird)/g); console.log(stringMatchAll("These are my pets - cats,dogs and bird."));

/*
	matchAll
	normalize
	padEnd
	padStart
	replaceAll
	trimEnd
	trimStart
	[@@iterator]
	raw
*/


// ARRAY METHODS

/*
	New
		flatMap
	Basic
		toLocaleString
	
*/
	// ARRAY PROPERTIES
	const arrayLength = () =>["javascript", "is", "a", "programming", "language"].length; // 5

	// ARRAY METHODS
	const arrayConcat = arr => [1,2,3].concat(arr);
	// console.log(arrayConcat([4,5,6])); // [1, 2, 3, 4, 5, 6]
  
	const arrayIncludes = () => [1,2,3,4,5,6].includes(2); // true
  
	const arrayJoin = () => ["javascript", "is", "cool"].join(" "); // javascript is cool
  
	const arrayPop = () => [1,2,3].pop(); // 3

	const arrayPush = () =>  ["Hello"].push("Gabriel"); // 2

	const arrayShift = () => [10,2,3,4,5,6].shift(); // 10

	const arrayUnShift = () => [1,2,3,4,5,6].unshift(7,8,9); // 9

	const arrayIndexOf = () => ["javascript", "is", "a", "programming", "language"].indexOf("language"); // 4

	const arrayLastIndexOf = () => ["javascript", "is", "a", "programming", "language"].lastIndexOf("language"); // 4

	const arrayReverse = () => ["javascript", "is", "a", "programming", "language"].reverse(); //  ["language", "programming", "a", "is", "javascript"]

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

 	const arrayFrom = arr => Array.from(arr); // ["f", "o", "o"]

 	const arrayIsArray = arr => Array.isArray(arr); // true

 	const arrayOf = arr => Array.of(arr);  // [10]

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


 // const math = () => ;
// console.log(math());

// MATH PROPERTIES AND METHODS

// PROPERTIES

const mathPI = () => Math.PI; // 3.141592653589793


// METHODS

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
console.log(mathImul());

/* 

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

*/

/*

isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number. 
                   // Parsing this as a number fails and returns NaN

*/