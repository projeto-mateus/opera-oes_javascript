// Criação de uma varivel: 
// O comando prompt é como o leia:

//var num1 = prompt('Digite um número: ');
//var num2 = prompt('Digite outro número: ');

//var soma = num1 + num2;

//console.log(soma);

// Esse código acima não funionará, pois ele irá apenas concatenas!


// O código parseInt tranformará letras em números: 
// Operação de soma: 

var num1 = parseInt(prompt('Digite um Número - SOMA: '));
var num2 = parseInt(prompt("Digite um Número - SOMA: "));

var soma = num1 + num2;


document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('soma').innerHTML = soma;

// Operação de Subtração

var num3 = parseInt(prompt('Digite um Número - SUBTRAÇÃO: '));
var num4 = parseInt(prompt("Digite um Número - SUBTRAÇÃO: "));

var subtração = num3 - num4;


document.getElementById('num3').innerHTML = num3;
document.getElementById('num4').innerHTML = num4;
document.getElementById('subtração').innerHTML = subtração;

// Operação de Multiplicação

var num5 = parseInt(prompt('Digite um Número - MULTIPLICAÇÃO: '));
var num6 = parseInt(prompt("Digite um Número - MULTIPLICAÇÃO: "));

var multiplicação = num5 * num6;


document.getElementById('num5').innerHTML = num5;
document.getElementById('num6').innerHTML = num6;
document.getElementById('multiplicação').innerHTML = multiplicação;

// Operação de  Divisão

var num7 = parseInt(prompt('Digite um Número - DIVISÃO: '));
var num8 = parseInt(prompt("Digite um Número - DIVISÃO: "));

var divisão = num7 / num8;


document.getElementById('num7').innerHTML = num7;
document.getElementById('num8').innerHTML = num8;
document.getElementById('divisão').innerHTML = divisão;
