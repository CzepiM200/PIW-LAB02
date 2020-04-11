const game = document.querySelector("#game");
const good = document.querySelector("#good");
const bad = document.querySelector("#bad");
const score = document.querySelector("#score");

let points = 0;
let spawn = false;

setInterval(gameManager, 1000);

function gameManager() {
    spawn === true ? disappearPokemon() : spawnPokemon();
}

function spawnPokemon() {
    spawn = true;
    Math.random() > 0.5 ? appearPokemon(good) : appearPokemon(bad);
}

function appearPokemon(pokemon) {
    pokemon.style.left = String(Math.round(Math.random()*272))+'px';
    pokemon.style.top = String(Math.round(Math.random()*272))+'px';
    pokemon.setAttribute("class", "activePokemon");
}

function disappearPokemon() {
    good.setAttribute("class", "inactivePokemon");
    bad.setAttribute("class", "inactivePokemon");
    spawn = false;
}

function onClickEvent(image) {
    image.getAttribute("id") == "good" ? points+=2 : points--;
    disappearPokemon();
    score.innerHTML = "Score: " + String(points);
}