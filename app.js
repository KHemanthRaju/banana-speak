var btntranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "translated: "+txtInput.value;
};

btntranslate.addEventListener("click", clickHandler);

