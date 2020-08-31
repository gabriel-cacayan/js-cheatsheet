// Part 2: Constructor
// CONSTRUCTOR
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

//	When an object instance is created the contructor function is run to create it; 
const person5 = new Person("Mikasa","Ackerman",19,"Female"); // OBJECT INSTANCE
// console.log(person5.bio()); // Hello, my name is Mikasa Ackerman and I'm 19 yrs old, and my gender is Female.


// The object() constructor
let person1 = new Object();

person1.name = 'Chris';
person1.age = 38;
person1.greeting = function() {
	return `Hi, I'm ${this.name} and I'm ${this.age}`;
};
// console.log(person1.greeting());

// Using create() method
const person2 = Object.create(person1);
person2.name = "Mikasa";
person2.age = 17;

// console.log(person2.greeting());