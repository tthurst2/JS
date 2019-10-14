function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Tyler", lastName: "Thurston" };
document.body.textContent = greeter(user2);
