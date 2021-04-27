let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

  for(key in names){
      console.log('Olá ' + names[key]);
  }

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
let resultado = []
  for(key in carro){
    resultado.push(key+': '+ carro[key]);
}
console.log(resultado);

