//choosing DOM elemnts
const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const currency = new Currency("USD", "TRY");


eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency)

    firstCurrency.onchange = function () {
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
    }

    secondCurrency.onchange = function () {
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
    }

}

function exchangeCurrency() {
    currency.changeAmount(amount.value);

    currency.exchange()
    .then(result => console.log(result))
    .catch(err => console.log(err));
}