class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`);
    }
}

const Ramesh = new Person("Ramesh", 27, "Doctor");
const Suresh = new Person("Suresh", 67, "Farmer");
const Ganesh = new Person("Ganesh", 47, "Graphics Designer");

Ramesh.introduce();
Suresh.introduce();
Ganesh.introduce();