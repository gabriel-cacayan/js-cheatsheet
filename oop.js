document.writeln(Date() + "<br />");

 /* Part 1: Object Literal

const person1 = {
	name: "Gabriel",
	age: 20,
	progLang: "javascript",
	greet: function(){
		return `My name is ${this.name} and I'm ${this.age} yrs old and my programming langugae is ${this.progLang}.`
	}
}

// console.log(person1.greet());

const person2 = Object.create(person1);
person2.name = "Mikasa";
person2.age = 17;

console.log(person2.greet());
*/


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

/*	When an object instance is created the contructor function is run to create it; */
const person5 = new Person("Mikasa","Ackerman",19,"Female"); // OBJECT INSTANCE
// console.log(person5.bio()); // Hello, my name is Mikasa Ackerman and I'm 19 yrs old, and my gender is Female.

const person6 = new Person("Monkey D.","Luffy",18,"Male");
// console.log(person6.bio()); // Hello, my name is Monkey D. Luffy and I'm 18 yrs old, and my gender is Male.

// The object constructor
let person1 = new Object();

person1.name = 'Chris';
person1.age = 38;
person1.greeting = function() {
	return `Hi, I'm ${this.name} and I'm ${this.age}`;
};
console.log(person1.greeting())



// Part 3: Prototypes
Person.prototype.fullName = function(){
	return `${this.first} ${this.last}`;
}
// console.log(person5.fullName()); // Elle Menopi


// Part 4: Inheritance
function Teacher(first,last,age,gender,subject){
	Person.call(this,first,last,age,gender);
	
	this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function() {
	return this.subject;
}

let teacher1 = new Teacher("Elle","Menopi",20,"Female","Math");

// console.log(teacher1.greeting());