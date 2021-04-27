let n = 5;
let symbol = "*";
let line = '';
if (n > 0) {
    for (index = 0; index < n; index += 1) {
        line = line + symbol
        console.log(line);
    }
  

} else {
    console.log('Valor de N inválido');
}