// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const refs = {
  inputRef: document.querySelector('#name-input'),
  outputRef: document.querySelector('#name-output'),
};
refs.inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.outputRef.textContent = event.currentTarget.value;
  if (refs.inputRef.value === '') {
    refs.outputRef.textContent = 'незнакомец';
  }
}
