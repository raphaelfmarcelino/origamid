var idade = 30;
var exp = 2e10;

console.log(exp);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var idade = '30s';
var num = 5;
console.log(+idade + num);

// Somar a string '200' com o número 50 e retornar 250
var num1 = '200';
var num2 = 50;
console.log(+num1 + num2);

// Incremente o número 5 e retorne o seu valor incrementado
var num3 = 5;
console.log(num3++);
console.log(num3);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(+numero / 2);
