const prompt = require("prompt-sync")();

const secreto = 42;
let tentativas = 0;

while (true) {
    const chute = Number(prompt("Digite um numero: "));
    tentativas++;

    if (chute === secreto) {
        console.log(`Parabens! Voce acertou em ${tentativas} tentativas.`);
        break;
    }

    if (chute < secreto) {
        console.log("O numero secreto e maior.");
    } else {
        console.log("O numero secreto e menor.");
    }
}