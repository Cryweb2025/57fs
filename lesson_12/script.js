// ! DOM
// методы работы с глобальным объектом document
// * этот объект содержит всю информацию об элементах и их свойствах на странице

// console.dir(document) // тут в объекта находится ВСЕ что на странице есть

//*  можно в ручную находить сво-ва этого объекта и изменять их но это не удобно 🫣
// console.dir(document.body.children[0].textContent)
// console.dir(document.body.children[1].children[1].textContent)

// ! DOM methods

// чтобы удобно взаимодействовать с html элементами
// нам нужно уметь их находить и изменять
// для этого у нас есть методы поиска

const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const counterValue = document.querySelector("#counter");

// ! counter

let counter = 0;

// присваиваем новое значение для данных на странице
btnPlus.textContent = "плюс";
btnMinus.textContent = "минус";

const handlePlus = () => {
  // увеличиваем counter на 1
  counter++;
  // меняем текст на значение переменной
  counterValue.textContent = counter;
};

const handleMinus = () => {
  counter--;
  counterValue.textContent = counter;
};

// создаем слушатель события для кнопки
// это способ сделать элемент интерактивным

btnPlus.addEventListener("click", handlePlus);
btnMinus.addEventListener("click", handleMinus);

// handlePlus();
// handlePlus();
