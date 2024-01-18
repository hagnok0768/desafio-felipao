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
    console.log(heroiFicha[0] + " está no nível: Ferro");
} else if (heroiFicha[1] >= 1001 && heroiFicha[1] <= 2000) {
    console.log(heroiFicha[0] + " está no nível: Bronze");
} else if (heroiFicha[1] >= 2001 && heroiFicha[1] <= 5000) {
    console.log(heroiFicha[0] + " está no nível: Prata");
} else if (heroiFicha[1] >= 5001 && heroiFicha[1] <= 7000) {
    console.log(heroiFicha[0] + " está no nível: Ouro");    
} else if (heroiFicha[1] >= 5001 && heroiFicha[1] <= 8000) {
    console.log(heroiFicha[0] + " está no nível: Platina");
} else if (heroiFicha[1] >= 8001 && heroiFicha[1] <= 9000) {
    console.log(heroiFicha[0] + " está no nível: Ascendente");
} else if (heroiFicha[1] >= 9001 && heroiFicha[1] <= 10000) {
    console.log(heroiFicha[0] + " está no nível: Imortal");
} else if (heroiFicha[1] >= 10001) {
    console.log(heroiFicha[0] + " está no nível: Radiante");
} else {
    console.log(heroiFicha[0] + " Está no nível ainda não classificado.");
}



