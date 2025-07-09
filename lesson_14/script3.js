// Promise

// fullfilled
// rejected
// pending

function getRandom() {
  return Math.floor(Math.random() * 2); // return 0 or 1
}

const burgerPromise = new Promise(function (res, rej) {
  setTimeout(() => {
    if (getRandom()) {
      res("Burger");
    } else {
      rej(new Error("No bread!"));
    }
  }, 5000);
});

console.log(burgerPromise);

//setTimeout(() => {
//console.log(burgerPromise);
//}, 6000);

// then - можем получить значение без таймера -> fullfilled
// catch - обработать ошибку в случае reject -> rejected

// Раскрыть промис бес сет таймаут

burgerPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err);
  });
