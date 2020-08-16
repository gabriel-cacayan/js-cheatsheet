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


	Higher order arrays
		

*/
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
	// console.log(arraySplice(["Java","C","C++"])); //["C", "C++"]

	const arrayFill = arr => arr.fill(6);
 	// console.log(arrayFill([1,2,3,4,5,6])); //[6, 6, 6, 6, 6, 6]

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
