// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector('#value');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

const increase = () => {
  valueRef.textContent = Number(valueRef.textContent) + 1;
};
const decrease = () => {
  valueRef.textContent = Number(valueRef.textContent) - 1;
};

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
