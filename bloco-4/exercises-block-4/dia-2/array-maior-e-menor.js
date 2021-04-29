let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparador = 0 

for(index = 0; index <numbers.length; index +=1 ){
    if(comparador <= numbers[index]){
        comparador = numbers[index];
    }
}

console.log(comparador);


let maior = 0 
let menor = numbers[0]
for(index2 = 0; index2 <numbers.length; index2 +=1 ){
     if (numbers[index2] < menor){
        menor = numbers[index2]
    }
}

console.log(menor);