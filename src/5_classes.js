// Part 5: Classes (ES6) Javascript version 2015
class Person {
    constructor(first,last,age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    greeting() {
        return `Hi my name is ${this.first + " " + this.last} and i'm ${this.age}`;
    };
}

const person1 = new Person("Mikasa","Ackerman",19);
console.log(person1.greeting()); // Hi my name is Mikasa Ackerman and i'm 19


