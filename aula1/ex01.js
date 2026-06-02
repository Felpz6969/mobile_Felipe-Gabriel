const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const idade = Number(prompt("Digite sua idade: "));
const cidade = prompt("Digite sua cidade: ");

console.log(`Ola! Meu nome e ${nome}, tenho ${idade} anos e sou de ${cidade}.`);