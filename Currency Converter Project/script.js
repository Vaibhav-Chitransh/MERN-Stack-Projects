const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const para = document.querySelector('.getAmount p');

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === 'from' && currCode === 'USD') {
            newOption.selected = 'selected';
        }
        if(select.name === 'to' && currCode === 'INR') {
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (elem) => {
    let currCode = elem.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = elem.parentElement.querySelector('img');
    img.src = newSrc;
}

const updateExchangeRate = async () => {
    let amount = document.querySelector('.amount input');
    let amtValue = amount.value;

    if(amtValue === '' || amtValue < 0) {
        amtValue = 1;
        amount.value = '1';
    }

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(url);
    let data = await response.json();
    let inp = String(fromCurr.value.toLowerCase());
    let out = String(toCurr.value.toLowerCase());
    let rate = data[inp];
    let conv = rate[out];

    let finalAmount = conv*amtValue;
    
    para.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

window.addEventListener('load', () => {
    updateExchangeRate();
})

btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
})