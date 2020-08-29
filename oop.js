document.writeln(Date() + "<br />");

/* Part 1: Object Literal

const person1 = {
	name: "Gabriel",
	age: 20,
	progLang: "javascript",
	greet: function(){
		return `My name is ${this.name} and I'm ${this.age} yrs old and my programming langugae is ${this.progLang}`
	}
}

// console.log(person1.greet());

const person2 = Object.create(person1);
person2.name = "Mikasa";
person2.age = 17;

// console.log(person2.greet());

*/


// Part 2: Constructor

// CONSTRUCTOR
function Person(first,last,age,gender) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.gender = gender;
	this.bio = function() {
		return `Hello my name is ${this.first} ${this.last} and I'm ${this.age} yrs old, and my gender is ${this.gender}.`
	};
}

// INSTANTIATION

/*	When an object instance is created the contructor function is run to create it; */
const person5 = new Person("Elle","Menopi",20,"Female"); // OBJECT INSTANCE
const person6 = new Person("Monkey D.","Luffy",18,"Male");
// console.log(person6.bio());

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