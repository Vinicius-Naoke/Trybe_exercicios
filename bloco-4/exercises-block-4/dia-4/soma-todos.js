function somaAll(N){
    let soma = 0;
    for(index = 1; index <= N; index+=1){
        soma += index;
    }
    return soma ;
}
console.log(somaAll(5));