var btntranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");

function clickHandler(){
    console.log("Nature is so Beautiful")
    console.log("Input"+txtInput.value);
};

btntranslate.addEventListener("click", clickHandler);

