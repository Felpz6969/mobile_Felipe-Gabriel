const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o primeiro numero: "));
const num2 = Number(prompt("Digite o segundo numero: "));

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtracao: ${num1 - num2}`);
console.log(`Multiplicacao: ${num1 * num2}`);

if (num2 !== 0) {
    console.log(`Divisao: ${num1 / num2}`);
} else {
    console.log("Erro: divisao por zero nao permitida.");
}