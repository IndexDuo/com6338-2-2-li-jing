// Your code here

function greet() {
    let name = window.prompt("What is your name?");
    window.alert("Hello, " + name);

    let age = window.prompt("How old are you?");
    age = parseInt(age);

    let year = new Date().getFullYear();

    if (window.confirm("Have you had a birthday yet this year?")) {
        let birthYear = year - age;
        window.alert("You were born in " + birthYear);
    } else {
        let birthYear = year - (age + 1);
        window.alert("You were born in " + birthYear);
    }
}
