/* Exercício 1 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for( let index = 0; index <= numbers.length -1; index +=1){
    console.log(numbers[index]);
}

/* Exercicio 2 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; index < numbers.length; index +=1) {
    sum += numbers[index];
       
}

console.log(sum);

/* exercicio 3 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for ( let index = 0; index < numbers.length; index +=1){
    sum += numbers[index];
}
let average = sum / numbers.length;

console.log(average);

/* exercicio 4 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for ( let index = 0; index < numbers.length; index +=1){
    sum += numbers[index];
}
let average = sum / numbers.length;

if (average > 20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}

/* exercicio 5 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = [0];

for (let index = 1; index < numbers.length; index +=1){
    if ( numbers[index] > highestNumber){
        highestNumber = numbers[index];
    }
}

console.log( highestNumber);

/* exercicio 6 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for ( let index = 0; index < numbers.length; index += 1){
    if( numbers[index] % 2 !==0){
        result += 1;
    }
        



