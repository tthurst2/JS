interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = {firstName: "Tyler", lastName: "Thurston"};

document.body.textContent = greeter(user2);