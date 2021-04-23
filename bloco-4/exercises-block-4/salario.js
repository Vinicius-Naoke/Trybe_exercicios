let salarioBruto = 3000;
let inss;
let ir;


if (salarioBruto <= 1556.94 && salarioBruto != 0) {
    inss = (salarioBruto - (salarioBruto * 0.08));
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = (salarioBruto - (salarioBruto * 0.09));
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = (salarioBruto - (salarioBruto * 0.11));
} else if (salarioBruto >= 5189.82) {
    inss = (salarioBruto - 570.88);
} else {
    console.log("Valor invalido");
}
console.log(inss);

if (inss <= 1903.98 && inss != 0) {
    ir = inss
} else if (inss >= 1903.99 && inss <= 2826.65) {
    ir = ((inss * 0.075) - 142.8)
} else if (inss >= 2826.66 && inss <= 3751.05) {
    ir = ((inss * 0.15) - 354.8)
} else if (inss >= 3751.06 && inss <= 4664.68) {
    ir = ((inss * 0.225) - 636.13)
} else if (inss >= 4664.68) {
    ir = ((inss * 0.275) - 869.36)
}

console.log(ir);

let salarioLiquido = (inss - ir)
console.log(salarioLiquido);