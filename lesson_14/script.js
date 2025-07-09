let x = 12;
console.log(x);

x = 10;
console.log(x);

// timer
setTimeout(() => {
  console.log("Hello 3 sec");
}, 3000);

console.log("Hello, no timer");

setTimeout(() => {
  console.log("Hello 3 sec");
}, 3000);

function thankYou() {
  setTimeout(() => {
    console.log("Thank you");
  }, 6000);
}

function lateHappyBirthday() {
  setTimeout(() => {
    console.log("Happy Birthday");
    thankYou();
  }, 6000);
}

lateHappyBirthday();
