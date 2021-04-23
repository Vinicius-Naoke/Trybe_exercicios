let array = [];
for (index = 0; index < 25; index += 1) {
    array[index] = index + 1
}
console.log(array);

for (index = 0; index < array.length; index += 1) {
    let divisao = array[index] / 2;
    console.log(divisao);
}