const menu = document.querySelector("#menu");
const creature = document.querySelector("#creature");

const creatures = ["bird", "cow", "crane", "dog", "gator", "pig", "reindeer", "snake", "turkey", "walrus"];

generateMenu();

function generateMenu() {
    for (let i = 0; i < 10 ; i++) {
        let option = document.createElement("img");
        menu.appendChild(option);
        option.setAttribute("onmouseover", "mouseOverEvent(this)");
        option.setAttribute("onmouseout", "mouseOutEvent(this)");
        option.setAttribute("id", String(i));
        option.setAttribute("src", "../images/creatures/" + creatures[i] + "out.gif");   
        menu.appendChild(document.createElement("br"));
    }
}

function mouseOverEvent(image) {
    image.setAttribute("src", "../images/creatures/" + creatures[Number(image.getAttribute("id"))] + "over.gif");
    creature.setAttribute("src", "../images/creatures/" + creatures[Number(image.getAttribute("id"))] + ".gif");
    creature.setAttribute("class", "creature");
}

function mouseOutEvent(image) {
    image.setAttribute("src", "../images/creatures/" + creatures[Number(image.getAttribute("id"))] + "out.gif");
    creature.setAttribute("class", "hidden");
}