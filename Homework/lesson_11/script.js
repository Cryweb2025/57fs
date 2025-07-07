const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

console.log("##################### Задание 1.2 #####################");

const youngJedi = [...starWarsHeroes.filter((el) =>el.isJedi && el.age < 40)];
console.log(youngJedi);

console.log("##################### Задание 1.3 #####################");

const sumOfAges = starWarsHeroes
  .map((value) => value.age)
  .reduce((acc, ages) => acc + ages, 0);
console.log(sumOfAges);

console.log("##################### Задание 1.4 #####################");

const agesPlusTen = starWarsHeroes.map((element) => ({
  ...element,
  age: element.age + 10,
}));
console.log(agesPlusTen);

console.log("##################### Задание 1.5 #####################");

const newStarWarsHeroes = [...starWarsHeroes];
newStarWarsHeroes.splice(0, 1);
newStarWarsHeroes.unshift({ name: "Darth Vader", age: 50, isJedi: false });
console.log(newStarWarsHeroes);

console.log("##################### Задание 1.6 #####################");

const nameAndIsJediHeroes = starWarsHeroes.map((val) => ({
  name: val.name,
  isJedi: val.isJedi,
}));
console.log(nameAndIsJediHeroes);
