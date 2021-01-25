// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
// Нахожу все нужные элементы
const refs = {
  controlsBoxRef: document.querySelector('#controls'),
  mainBoxRef: document.querySelector('#boxes'),
  inputRef: document.querySelector('#controls input'),
  buttonRef: document.querySelector('button[data-action="render"]'),
  destroyButtonRef: document.querySelector('button[data-action="destroy"]'),
};

let sizes = 0;

// фунция, принимающие число и создающая массив
// соответствующей длины.Каждый элемент превращается в div со случайным цветом и рахмером на 10 больше
function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newBoxRef = document.createElement('div');

    newBoxRef.style.width = sizes + 30 + 'px';
    newBoxRef.style.height = sizes + 30 + 'px';
    sizes += 10;
    newBoxRef.style.backgroundColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    newArray.push(newBoxRef);
  }

  return refs.mainBoxRef.append(...newArray);
}

refs.inputRef.addEventListener('input', onInputNumber);
function onInputNumber(event) {
  refs.inputRef.value = event.currentTarget.value;
}

function onCreateBtnClick(event) {
  createBoxes(refs.inputRef.value);
}
refs.buttonRef.addEventListener('click', onCreateBtnClick);

// Функция очищения содержимого
function clearMainBox(event) {
  refs.mainBoxRef.innerHTML = '';
}

refs.destroyButtonRef.addEventListener('click', clearMainBox);
