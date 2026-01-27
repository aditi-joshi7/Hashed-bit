const person = {
  name: "Aditi",
  age: 23,
  occupation: "Developer"
};

function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`
  );
}

greetPerson(person);