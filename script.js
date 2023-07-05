const input = document.querySelector("#value");
const dolarValue = document.querySelector(".dolarValue");
const btnSend = document.querySelector(".btnSend");
const result = document.querySelector(".result");

const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let dolarAtual = data.USDBRL.bid.slice(0, 4);
    dolarValue.innerText = dolarAtual;
  });

input.addEventListener("input", function () {
  let valueInNumbers = input.value.replace(/[^\d.,]/g, "");
  input.value = valueInNumbers;
});

btnSend.addEventListener("click", function () {
  let inputValue = parseFloat(input.value.replace(".", "").replace(",", "."));
  if (isNaN(inputValue)) {
    result.innerText = "Apenas números são aceitos!";
  } else {
    result.innerText = (inputValue / parseFloat(dolarValue.innerText)).toFixed(
      2
    );
  }
});
