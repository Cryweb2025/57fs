// Задание 1
console.log(
  "-------------------------------- Задание 1 --------------------------------"
);

// 1.
let myNumber = 100 / (25 % 3);
console.log(myNumber);

// 2.
let myString = "Hello, " + "world" + "!" + String(2024);
console.log(myString);

// 3.
let isHuman = 42 == "42";
console.log(isHuman);

// 4.
let myNumber1 = parseInt("123smth");
console.log(myNumber1);

console.log(
  "################################ Дополнительные упражнения ################################"
);

// **Задание 1**
console.log(
  "-------------------------------- Задание 1 --------------------------------"
);

// 1.
let age = 18;
let hasPassport = true;

// 2.
let canTravel =
  age >= 18 && hasPassport
    ? "Вы можете путешествовать ✈️"
    : "Путешествие невозможно ❌";

//3.
console.log(canTravel);

// **Задание 2**
console.log(
  "-------------------------------- Задание 2 --------------------------------"
);

//1.
let inputString = "500€";

//2.
let price = parseInt(inputString);

//3.
console.log(price);

// **Задание 3**
console.log(
  "-------------------------------- Задание 3 --------------------------------"
);

// 1.
let randomNumber = Math.floor(Math.random() * 50) + 1;

// 2.
console.log(randomNumber);

// 3.
let isEven = randomNumber % 2 == 0 ? "Чётное" : "Не чётное";

// 4.
console.log(isEven);
