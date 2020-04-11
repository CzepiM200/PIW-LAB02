const form = document.querySelector("form");
const results = document.querySelector("#results");

const a = form.querySelector("#a");
const b = form.querySelector("#b");
const c = form.querySelector("#c");
const delta = results.querySelector("#delta");
const result1 = results.querySelector("#result1");
const result2 = results.querySelector("#result2");

let calculate;

form.addEventListener("submit", validateInput);

function validateInput(e) {
    e.preventDefault();

    calculate = true;
    validateFactorA(a);
    validateFactor(b);
    validateFactor(c);
    
    calculate && calculateAndPrintResult();
}

function validateFactorA(input) {
    const reg = new RegExp("^(-|[0-9])[0-9]*$");
    if(!reg.test(input.value)){
        calculate = false;
        printErrorMessage(input, "Współczynnik musi być liczbą!");
        return;
    }
   
    if(Number(input.value) === 0){
        calculate = false;
        printErrorMessage(input, "Współczynnik nie może być równy 0!");
        return;
    }

    setValidationStatusCorrect(input);
}

function validateFactor(input) {
    const reg = new RegExp("^(-|[0-9])[0-9]*$");
    if(!reg.test(input.value)){
        calculate = false;
        printErrorMessage(input, "Współczynnik musi być liczbą!");
        return;
    }

    setValidationStatusCorrect(input);
}

function printErrorMessage(node, text) {
    const parent = node.parentNode;
    if(parent.querySelector(".invalid"))
        parent.querySelector(".invalid").remove();

    const textNode = document.createTextNode(text);
    const atr = document.createAttribute("class")
    atr.value = "invalid";
    const message = document.createElement("p")
    message.appendChild(textNode);
    message.setAttributeNode(atr);
    parent.appendChild(message);
}

function setValidationStatusCorrect(node) {
    node.parentNode.querySelector(".invalid") && node.parentNode.querySelector(".invalid").remove()
}

function calculateAndPrintResult() {
    let resultDelta = b.value * b.value - 4 * a.value * c.value;
    console.log(resultDelta);
    if (resultDelta >= 0) {
        const x1 = (-1 * b.value - Math.sqrt(resultDelta))/(2 * a.value);
        const x2 = (-1 * b.value + Math.sqrt(resultDelta))/(2 * a.value);
        printResults(String(resultDelta), String(x1), String(x2))
    }
    else {
        printResults(String(resultDelta), "...", "...");
    }
}

function printResults(resultDelta, x1, x2) {
    delta.innerHTML = resultDelta;
    result1.innerHTML = x1;
    result2.innerHTML = x2;
}


