const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    const nota = Number(prompt(`Digite a nota ${i}: `));
    soma += nota;
}

let media = soma / 5;

console.log(`Media: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}