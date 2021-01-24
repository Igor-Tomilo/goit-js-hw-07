// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationBtnRef = document.querySelector('#validation-input');

validationBtnRef.addEventListener('blur', onBlurCheck);
const validBtnClassList = validationBtnRef.classList;
function onBlurCheck(event) {
  if (
    validationBtnRef.value.length === Number(validationBtnRef.dataset.length)
  ) {
    validBtnClassList.add('valid');
    validBtnClassList.remove('invalid');
  } else {
    validBtnClassList.remove('valid');
    validBtnClassList.add('invalid');
  }
}
