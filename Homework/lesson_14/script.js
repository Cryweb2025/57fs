// Task 1

const homeWorkPromise = new Promise(function (res, rej) {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber > 0.5) {
    res("Best day of my life");
  } else {
    rej(new Error("Something is off"));
  }
});

homeWorkPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(homeWorkPromise);
