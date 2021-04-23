let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
let contadorElementos = 0
let soma = 0
for (cont = 0; cont < numbers.length; cont += 1) {
    soma += numbers[cont] ;
    contadorElementos += 1;
}

console.log(soma);
resultado = (soma / contadorElementos);
console.log(resultado);

if(resultado > 20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor que 20');
}