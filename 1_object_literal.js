// Part 1: Object Literal
const person1 = {
	name: "Gabriel",
	age: 20,
	progLang: "javascript",
	greet: function(){
		return `My name is ${this.name} and I'm ${this.age} yrs old and my programming langugae is ${this.progLang}.`
	}
}
console.log(person1.greet()); // My name is Gabriel and I'm 20 yrs old and my programming langugae is javascript.