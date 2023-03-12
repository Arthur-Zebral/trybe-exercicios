/* Exercício 1 */

let a = 100
let b = 20

console.log("Soma: " + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

/* Exercício 2 */

let a = 30
let b = 50

if (a > b) {
    console.log('A é maior');
}
else {
    console.log('B é maior');
}

/* Exercício 3 */

let a = 10
let b = 100
let c = 1000

if (a > b && a > c) {
    console.log('A é o maior');
}
else if (b > a && b > c) {
    console.log('B é o maior');
}
else {
    console.log('C é o maior');
}

/* Exercício 4 */

let a = 0

if (a > 0) {
    console.log('positivo');
}
else if (a < 0) {
    console.log('negativo');
}
else {
    console.log('0');
}

/* Exercício 5 */

let angulo1 = 90
let angulo2 = 30
let angulo3 = 60

let sumOfAngles = angulo1 + angulo2 + angulo3;
let allAnglesArePositive = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (allAnglesArePositive) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }

} else {
    console.log('Inválido');
}

/* Exercício 6 */

let chessPiece = 'bispo';

switch (chessPiece) {
    case 'bispo': console.log('Bispo -> Diagonal');
        break;
    case 'rei': console.log('Rei -> Qualquer Direção Uma Casa');
        break;
    case 'rainha': console.log('Rainha -> Qualquer Direção');
        break;
    case 'cavalo': console.log('Cavalo -> Formato de L');
        break;
}

/* Exercício 7 */

let nota = 85;

if (nota >= 90){
    console.log('Nota: A');
}
else if (nota >= 70 && nota < 90) {
    console.log('Nota: B');
}
else if (nota >= 50 && nota < 70){
    console.log('Nota: C');
}
else if (nota >= 30 && nota < 50){
    console.log('Nota: D');
}
else if (nota >= 0 && nota < 30){
    console.log('Nota: F');
}
else{
    console.log('Nota Inválida');
}

/* Exercício 8 */

let num1 = 20;
let num2 = 35;
let num3 = 55;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log(true);
}
else{
    console.log(false);
}

/* Exercício 9 */

let num1 = 20;
let num2 = 35;
let num3 = 55;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    console.log(true);
}
else{
    console.log(false);
}

/* Exercício 10 */


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

/* Exercício 11 */
