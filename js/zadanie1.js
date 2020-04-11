const form = document.querySelector("form");

const nameInput = form.querySelector("#nameInput");
const surnameInput = form.querySelector("#surnameInput");
const phoneNumberInput = form.querySelector("#phoneNumberInput");
const birthdateInput = form.querySelector("#birthdateInput");
const emailInput = form.querySelector("#emailInput");
const loginInput = form.querySelector("#loginInput");
const passwordInput = form.querySelector("#passwordInput");
const secondPasswordInput = form.querySelector("#secondPasswordInput");

const checkData = function(e){
    e.preventDefault();
    validateText(nameInput, "Imię");
    validateText(surnameInput, "Nazwisko");
    validateNumber(phoneNumberInput, "Numer telefonu");
    validateBirthdate(birthdateInput, "Data urodzenia");
    validateEmail(emailInput, "Email");
    validateText(loginInput, "Login");
    validatePassword(passwordInput, "Hasło");
    validatePasswordMatch(passwordInput, secondPasswordInput, "Hasła");
}

const validateText = function(input, text){
    const nameReg = new RegExp("^[a-z]{2,20}$", "i");
        nameReg.test(String(input.value).toLowerCase()) && String(input.value).length <= 20 ? printSucces(input, "✓") : printError(input, text + " jest nieprawidłowe!")
}

const validateNumber = function(input, text){
    const nameReg = new RegExp("^48[0-9]{9}$");
        nameReg.test(String(input.value)) ? printSucces(input, "✓") : printError(input, text + " powinien zawierać dokładnie 9 cyfr!")
}

const validateBirthdate = function(input, text){
    const nameReg = new RegExp("^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$");
        nameReg.test(String(input.value)) ? printSucces(input, "✓") : printError(input, text + " powinna być w formacie DD.MM.YYYY")
}

const validateEmail = function(input, text){
    const nameReg = new RegExp("^[0-9a-z.-]+@[0-9a-z.-]+\.[0-9a-z]{2,3}$", "i");
        nameReg.test(String(input.value)) ? printSucces(input, "✓") : printError(input, text + " jest nieprawidłowy!")
}

const validatePassword = function(input, text){
    const nameReg = new RegExp("^[0-9a-zA-Z~!@#$%^&*()_+-=]{9,12}$",);
        nameReg.test(String(input.value)) ? printSucces(input, "✓") : printError(input, text + " powinno zawierać od 9 do 12 liter, cyfr lub znaków")
}

const validatePasswordMatch = function(input1, input2, text){
    const nameReg = new RegExp("^[0-9a-zA-Z~!@#$%^&*()_+-=]{9,12}$",);

    input1.value && input2.value && input1.value == input2.value && nameReg.test(String(input.value)) ? printSucces(input2, "✓") : printError(input2, text + " muszą być poprawne oraz identyczne!")
}

const printError = function(node, text){
    const output = node.parentNode.querySelector("p");
    if(output) output.remove()

    const message = document.createElement("p");
    const atr = document.createAttribute("class");
    atr.value = "invalid";
    message.setAttributeNode(atr);
    message.appendChild(document.createTextNode(text));
    node.parentNode.appendChild(message);
}

const printSucces = function(node, text){
    const output = node.parentNode.querySelector("p");
    if(output) output.remove()

    const message = document.createElement("p");
    const atr = document.createAttribute("class");
    atr.value = "valid";
    message.setAttributeNode(atr);
    message.appendChild(document.createTextNode(text));
    node.parentNode.appendChild(message);
}


form.addEventListener("submit", checkData);