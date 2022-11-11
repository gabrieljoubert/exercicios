// let = estou declarando a variavel, no java normal se usa var, ja no javascript usa let.
/*let num1 = 4;
let num2 = 4;

console.log('Soma: 4 + 4 = ' + (num1 + num2));
console.log('Subtração: 4 - 4 = ' + (num1 - num2));
console.log('Divisão: 4 / 4 = ' + (num1 / num2));
console.log('Multiplicação: 4 * 4 = ' + (num1 * num2));
*/



//Exercício 2 - Página 41 do livro de Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

//Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
//Exemplo:
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valorJantar = 80;
let taxaGarcom = 10;
let total;

total = 80 + ((taxaGarcom / 100) * 80);

console.log(`Valor do jantar: R$${valorJantar},00`);
console.log(`Taxa do Garçom: R$${taxaGarcom},00`);
console.log(`Total: R$${total},00`);