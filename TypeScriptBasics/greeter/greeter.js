function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Tyler", lastName: "Thurston" };
document.body.textContent = greeter(user);
