var input = document.querySelector("#value");
var dolarValue = document.querySelector(".dolarValue");
var btnSend = document.querySelector(".btnSend");
var result = document.querySelector(".result");

var url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var dolarAtual = data.USDBRL.bid.slice(0, 4);
    dolarValue.innerText = dolarAtual;
  });

input.addEventListener("input", function () {
  var valueInNumbers = input.value.replace(/[^\d.,]/g, "");
  input.value = valueInNumbers;
});

btnSend.addEventListener("click", function () {
  var inputValue = parseFloat(input.value.replace(".", "").replace(",", "."));
  if (isNaN(inputValue)) {
    result.innerText = "Apenas números são aceitos!";
  } else {
    result.innerText = (inputValue / parseFloat(dolarValue.innerText)).toFixed(
      2
    );
  }
});
