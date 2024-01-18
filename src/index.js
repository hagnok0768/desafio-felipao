const prompt = require('prompt-sync')();

//Solicita o Nome do Heroi

let nomeHeroi = prompt("Digite o Nome do Heroi: ");

//Solicita o Xp do Heroi 

let xpHeroi = prompt("Digite o XP do Heroi: ");

// Converte a entrada do usuário para um número inteiro
xpHeroi = parseInt(xpHeroi);

// Matriz para armazenar o nome e a XP do herói
let heroiFicha = [nomeHeroi,xpHeroi];

// Estrutura de decisão para determinar o nível com base na quantidade de XP
if (heroiFicha[1] < 1000) {
    console.log(heroiFicha[0] + " atingiu o nível: Ferro");
} else if (heroiFicha[1] >= 1001 && heroiFicha[1] <= 2000) {
    console.log(heroiFicha[0] + " atingiu o nível: Bronze");
} else if (heroiFicha[1] >= 2001 && heroiFicha[1] <= 5000) {
    console.log(heroiFicha[0] + " atingiu o nível: Prata ou Ouro");
} else if (heroiFicha[1] >= 5001 && heroiFicha[1] <= 8000) {
    console.log(heroiFicha[0] + " atingiu o nível: Platina ou Diamante");
} else if (heroiFicha[1] >= 8001 && heroiFicha[1] <= 9000) {
    console.log(heroiFicha[0] + " atingiu o nível: Ascendente");
} else {
    console.log(heroiFicha[0] + " atingiu um nível ainda não classificado.");
}



