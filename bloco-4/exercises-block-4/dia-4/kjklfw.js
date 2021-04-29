function e (palavra){
    for (var leitor = 0 ; leitor < palavra.length/2 ; leitor +=1){
        if (palavra[leitor] == palavra[palavra.length - (leitor+1)]){
            console.log('true')
        }
        else {
            console.log('false');
        }
    }
}

e('abcdefg');