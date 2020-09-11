// Part 4: Inheritance
function Person(first,last,age,gender) {
	this.first = first;
	this.last = last;
	this.age = age;
	this.gender = gender;
}

function Teacher(first,last,age,gender,subject){
	Person.call(this,first,last,age,gender);
	
	this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function() {
	return `My name is ${this.first + " " + this.last} and my favorite subject is ${this.subject}.`;
}

let teacher1 = new Teacher("Mikasa","Ackerman",19,"Female","Math");

 console.log(teacher1.greeting()); // My name is Mikasa Ackerman and my favorite subject is Math.

