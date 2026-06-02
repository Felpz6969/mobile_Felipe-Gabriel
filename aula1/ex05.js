const prompt = require("prompt-sync")();

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    const numero = Number(prompt(`Digite o numero ${i}: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de impares: ${impares}`);