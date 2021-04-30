document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Pedroca estamos com você';
let colorC = document.getElementById('elementoOndeVoceEsta').parentElement;
colorC.style.color = 'green'

let child1 = document.createElement('div');
document.getElementById('elementoOndeVoceEsta').appendChild(child1).innerHTML = 'ratos';

let child2 = document.createElement('div');
document.getElementById('pai').appendChild(child2).innerHTML = 'ratos';

let child3 = document.createElement('div');
document.getElementById('primeiroFilhoDoFilho').appendChild(child3).innerHTML = 'ratos';

const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);