// Задание 1
console.log(
  "-------------------------------- Задание 1 --------------------------------"
);

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];
const persons = [];

for (let i = 0; i < names.length; i++) {
  persons.push(names[i] + " " + ages[i] + " лет/годов");
}

console.log(persons);

// Задание 2
console.log(
  "-------------------------------- Задание 2 --------------------------------"
);

const personsReversed = [];

for (let i = persons.length - 1; i >= 0; i--) {
  personsReversed.push(persons[i]);
}

console.log(personsReversed);

// Задание 3
console.log(
  "-------------------------------- Задание 3 --------------------------------"
);

const fruits = [];

fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

let value = fruits.pop();

fruits.unshift(value);

console.log(fruits);

// Задание 4
console.log(
  "-------------------------------- Задание 4 --------------------------------"
);

const fruitsAndVeggies = [...fruits, "carrot", "tomato", "cucumber"];

const [orange, banana, apple, carrot, tomato, cucumber] = fruitsAndVeggies;

console.log(fruitsAndVeggies);
console.log(orange);
console.log(banana);
console.log(apple);
console.log(carrot);
console.log(tomato);
console.log(cucumber);
