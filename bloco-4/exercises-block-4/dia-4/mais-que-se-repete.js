function repetidor(numeros) {

    let numRepetido = numeros[0];
    for (let indice in numeros) {
        if (numeros[numRepetido] === numeros[indice]) {
           numRepetido = numeros[indice];
        }
    }
    return numRepetido;
}
console.log(repetidor([2, 3, 2, 5, 8, 2, 3])); 