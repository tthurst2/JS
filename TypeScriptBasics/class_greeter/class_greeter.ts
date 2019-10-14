class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Memelord", "H", "Pepehands");

document.body.textContent = greeter(user3);