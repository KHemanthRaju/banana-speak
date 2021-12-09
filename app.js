var btntranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    // outputDiv.innerText = "translated: "+txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated));
};

btntranslate.addEventListener("click", clickHandler);

