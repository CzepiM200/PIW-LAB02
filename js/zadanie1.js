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
    const nameReg = new RegExp("^[\+]48[0-9]{9}$");
        nameReg.test(String(input.value)) ? printSucces(input, "✓") : printError(input, text + " powinien zawierać dokładnie 9 cyfr i być w spostaci +48xxxxxxxxx!")
}

const ifLeapYear = function(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        return true;
    return false;
}

const validateBirthdate = function(input, text){
    const syntaxReg = new RegExp("^..\...\.....$");
        if (syntaxReg.test(String(input.value))) {
            const day = Number(String(input.value).substr(0,2));
            const month = Number(String(input.value).substr(3,2));
            const year = Number(String(input.value).substr(6,4));
            if (month > 0 && month < 13) {
                if(month == 2){
                    if (ifLeapYear(year)) {
                        if (day > 0 && day < 30) 
                            printSucces(input, "✓");
                        else 
                            printError(input, "Ten miesiąc, ma w roku przestępnym od 01 do 29 dni!");
                    }
                    else {
                        if (day > 0 && day < 29) 
                            printSucces(input, "✓");
                        else 
                            printError(input, "Ten miesiąc, ma w roku nieprzestępnym od 01 do 28 dni!");
                    }
                }
                else {
                    if ([1,3,5,7,8,10,12].includes(month) ) {
                        if (day > 0 && day < 32) 
                            printSucces(input, "✓");
                        else 
                            printError(input, "Ten miesiąc, ma w roku przestępnym od 01 do 31 dni!");
                    } 
                    else{
                        if (day > 0 && day < 31) 
                            printSucces(input, "✓");
                        else 
                            printError(input, "Ten miesiąc, ma w roku przestępnym od 01 do 30 dni!");
                    }
                }
            }
            else
                printError(input, "Możliwe są miesiące od 01 do 12!");
        } 
        else
            printError(input, text + " powinna być w formacie DD.MM.YYYY");
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

    input1.value && input2.value && input1.value == input2.value && nameReg.test(String(input2.value)) ? printSucces(input2, "✓") : printError(input2, text + " muszą być poprawne oraz identyczne!")
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