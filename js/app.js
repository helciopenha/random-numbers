import Result from './templates/result.js';

const button = document.getElementById('button-form');
button.addEventListener('click', (e) => {
  e.preventDefault();

  const divResult = document.getElementById('result');

  const min = Number(document.getElementById('number_min').value);
  const max = Number(document.getElementById('number_max').value);
  const quant = Number(document.getElementById('quantity').value);

  let results = [];

  results = getRandomInt(min, max, quant);

  divResult.innerHTML = '';

  results.forEach(r => {
    divResult.innerHTML += Result.getTemplate(r);
  });

  const arrayDisplayNone = document.querySelectorAll('.opacity-0');
  setTimeout(() => {
    arrayDisplayNone.forEach(a => {
      a.classList.remove('opacity-0');
    });
  }, 300)
})

function getRandomInt(min, max, quant) {
  let result = [];
  let i = 0;

  let temp = 0;

  min = Math.floor(min);
  max = Math.floor(max);

  while(i < quant) {

    temp = Math.floor(Math.random() * (max - min + 1)) + min;

    if( !result.includes(temp) ) {
      result.push(temp)
      result.sort((a, b) => a - b);
      i++
    }
  }
  console.log(`${i}: ${result}`);
  return result;
}