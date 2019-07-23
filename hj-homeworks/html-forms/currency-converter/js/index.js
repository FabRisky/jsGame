const currenciesRequest = new XMLHttpRequest();
currenciesRequest.addEventListener('load', onSuccessLoad);
currenciesRequest.addEventListener('loadstart', switchLoaderVisibility);
currenciesRequest.open('GET', 'https://neto-api.herokuapp.com/currency', true);
currenciesRequest.send();

let currencies;

const convertFrom = document.getElementById('from');
convertFrom.addEventListener('change', calculateAndShowResult);

const convertTo = document.getElementById('to');
convertTo.addEventListener('change', calculateAndShowResult);

const source = document.getElementById('source');
source.addEventListener('input', calculateAndShowResult);

function onSuccessLoad(event) {
  if (event.target.status === 200) {
    switchLoaderVisibility();
    currencies = JSON.parse(event.target.responseText);

    Array.from(currencies).forEach(curCurrency => {
      const currency = document.createElement('option');
      currency.setAttribute('value', curCurrency.value);
      currency.innerText = curCurrency.code;

      convertFrom.appendChild(currency);
      convertTo.appendChild(currency.cloneNode(true));
    });

    convertFrom.querySelector('option').selected = true;
    convertTo.querySelector('option').selected = true;

    document.getElementById('content').classList.remove('hidden');
    calculateAndShowResult();
  }
}

function switchLoaderVisibility() {
  document.getElementById('loader').classList.toggle('hidden');
}

function calculateAndShowResult() {
  const sourceValue = parseFloat(source.value),
        result = document.getElementById('result');
  let resultValue;

  if (!isNaN(sourceValue)) {
    result.value = (sourceValue * convertFrom.value / convertTo.value).toFixed(2);
  } else {
    result.value = 'Невозможно выполнить расчет. Проверьте введенное количество.';
  }
}