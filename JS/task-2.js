// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredientsList = document.querySelector('#ingredients');

const ingridientsArray = ingredients.map(ingridient => {
  const newListRef = document.createElement('li');
  newListRef.textContent = ingridient;
  return newListRef;
});

ingredientsList.append(...ingridientsArray);
