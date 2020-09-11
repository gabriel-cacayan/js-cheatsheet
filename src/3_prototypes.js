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
