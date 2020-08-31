// Part 6: Sub-Classes
class Person {
    constructor(first,last,age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    greeting() {
        return `Hi my name is ${this.first + " " + this.last} and I'm ${this.age}`;
    };
}

const person1 = new Person("Mikasa","Ackerman",19);
// console.log(person1.greeting()); // Hi my name is Mikasa Ackerman and i'm 19


// Inheritance in class
class Teacher extends Person {
    constructor(first,last,age,subject, grade) {
        super(first,last,age); // Now 'this' is initialized by calling the parent constructor.

         // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
     }

    lecture() {
        return `Hello class, I'm ${this.first + " " + this.last} and I'm ${this.age} yrs old. My subject is ${this.subject} and you need atleast ${this.grade} to pass.`;
    };
}

const teacher1 = new Teacher("Monkey D.","Luffy",20,"Math",94);
console.log(teacher1.lecture()); // Hello class, I'm Monkey D. Luffy and I'm 20 yrs old. My subject is Math and you need atleast 94 to pass.