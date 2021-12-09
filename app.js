var btntranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured "+error);
    alert("Something gone wrong with server");
}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated
        })
        .catch(errorHandler);
};

btntranslate.addEventListener("click", clickHandler);

