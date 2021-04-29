function palindromoCheck(string) {
    let checkString = '';
    let count = 0
    for (index = string.length - 1; index >= 0; index -= 1) {
        checkString += string[index];

    };
    if (checkString === string) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(palindromoCheck('tenet'));